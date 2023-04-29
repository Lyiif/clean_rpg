import { AppState, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '../store';
import { Provider } from 'react-redux';
import { setStrength, setDexterity, setIntelligence, setCharisma, setName } from '../actions';
import * as actions from '../actions';
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';
import { saveAs } from 'file-saver';


export default function TabOneScreen() {
  const dispatch = useDispatch();
  const state = store.getState();

  useEffect(() => {
    if (state.attack > state.strength) {
      dispatch(actions.setAttack(Math.max(state.strength, 0)));
    }
  }, [state.strength, state.attack, dispatch]);
  
  useEffect(() => {
    if (state.stealth > state.dexterity) {
      dispatch(actions.setStealth(Math.max(state.dexterity, 0)));
    }
    if (state.marksmanship > state.dexterity) {
      dispatch(actions.setMarksmanship(Math.max(state.dexterity, 0)));
    }
  }, [state.dexterity, state.stealth, state.marksmanship, dispatch]);

  useEffect(() => {
    if (state.learning > state.intelligence) {
      dispatch(actions.setLearning(Math.max(state.intelligence, 0)));
    }
    if (state.survival > state.intelligence) {
      dispatch(actions.setSurvival(Math.max(state.intelligence, 0)));
    }
    if (state.medicine > state.intelligence) {
      dispatch(actions.setMedicine(Math.max(state.intelligence, 0)));
    }
  }, [state.intelligence, state.learning, state.survival, state.medicine, dispatch]);

  useEffect(() => {
    if (state.intimidation > state.charisma) {
      dispatch(actions.setIntimidation(Math.max(state.charisma, 0)));
    }
    if (state.insight > state.charisma) {
      dispatch(actions.setInsight(Math.max(state.charisma, 0)));
    }
    if (state.appearance > state.charisma) {
      dispatch(actions.setAppearance(Math.max(state.charisma, 0)));
    }
    if (state.manipulation > state.charisma) {
      dispatch(actions.setManipulation(Math.max(state.charisma, 0)));
    }
  }, [state.charisma, state.intimidation, state.insight, state.appearance, state.manipulation, dispatch]);
  

  const strength = useSelector((state: RootState) => state.strength); // Update type of state to store
  const handleStrengthChange = (value: number) => {
    dispatch(setStrength(value));
  }

  const dexterity = useSelector((state: RootState) => state.dexterity);
  const handleDexterityChange = (value: number) => {
    dispatch(setDexterity(value));
  }

  const intelligence = useSelector((state: RootState) => state.intelligence);
  const handleIntelligenceChange = (value: number) => {
    dispatch(setIntelligence(value));
  }

  const charisma = useSelector((state: RootState) => state.charisma);
  const handleCharismaChange = (value: number) => {
    dispatch(setCharisma(value));
}

  const name = useSelector((state: RootState) => state.name);
  const handleNameChange = (value: string) => {
  dispatch(setName(value));
}
const [health, setHealth] = useState(0);

useEffect(() => {
  if (strength > -3) {
  setHealth(3 + strength);
  }
}, [strength]); // Remove 'health' from the dependency array

const evasion = 10 + dexterity;
const vigor = dexterity + intelligence;
const vitality = 3 + strength;

const takeDamage = () => {
  if (health > 0) {
    setHealth(health - 1);
  }
};

  const resetHealth = () => {
    setHealth(3 + strength);
  };

  async function exportVariablesToJsonAndDownload(): Promise<void> {
    try {
      // Set your variable values here, e.g.
      const state = store.getState();
      const data = {
        name: name,
        strength: strength,
        dexterity: dexterity,
        intelligence: intelligence,
        charisma: charisma,
        attack: state.attack,
        stealth: state.stealth,
        marksmanship: state.marksmanship,
        learning: state.learning,
        survival: state.survival,
        medicine: state.medicine,
        intimidation: state.intimidation,
        insight: state.insight,
        appearance: state.appearance,
        manipulation: state.manipulation
      };
  
      const jsonString = JSON.stringify(data);
      const blob = new Blob([jsonString], { type: 'application/json' });
      saveAs(blob, 'myData.json');
    } catch (error) {
      console.error('Error exporting variables to JSON:', error);
    }
  }
  
  // Function to load the variables
  async function loadVariablesFromJson(): Promise<void> {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) {
          console.error('No file selected');
          return;
        }
  
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const jsonString = reader.result as string;
            const data = JSON.parse(jsonString);
  
            // Set your variable values here, e.g.
            dispatch(actions.setName(data.name));
            dispatch(actions.setStrength(data.strength));
            dispatch(actions.setDexterity(data.dexterity));
            dispatch(actions.setIntelligence(data.intelligence));
            dispatch(actions.setCharisma(data.charisma));
            dispatch(actions.setAttack(data.attack));
            dispatch(actions.setStealth(data.stealth));
            dispatch(actions.setMarksmanship(data.marksmanship));
            dispatch(actions.setLearning(data.learning));
            dispatch(actions.setSurvival(data.survival));
            dispatch(actions.setMedicine(data.medicine));
            dispatch(actions.setIntimidation(data.intimidation));
            dispatch(actions.setInsight(data.insight));
            dispatch(actions.setAppearance(data.appearance));
            dispatch(actions.setManipulation(data.manipulation));
  
            // Do something with the loaded variables
          } catch (error) {
            console.error('Error parsing JSON file:', error);
          }
        };
        reader.readAsText(file);
      };
      input.click();
    } catch (error) {
      console.error('Error loading variables from JSON file:', error);
    }
  }

  return (
    <Provider store={store}>
    <ScrollView>
<View style={{ paddingLeft: 10 }}>
  
      
<View style={{flex: 1}}>
  <View style={{position: 'absolute', top: 0, right: 0, flexDirection: 'row'}}>
    <TouchableOpacity onPress={() => takeDamage()} style={{backgroundColor: 'red', borderRadius: 5, padding: 10, margin: 10}}>
      <Text style={{color: 'white'}}>Take 1 Damage</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setHealth(vitality)} style={{backgroundColor: '#ADD8E6', borderRadius: 5, padding: 10, margin: 10}}>
      <Text style={{color: 'black'}}>Reset Vitality</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => loadVariablesFromJson()} style={{backgroundColor: 'green', borderRadius: 5, padding: 10, margin: 10}}>
      <Text style={{color: 'black'}}>Import character</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => exportVariablesToJsonAndDownload()} style={{backgroundColor: 'orange', borderRadius: 5, padding: 10, margin: 10}}>
      <Text style={{color: 'black'}}>Export character</Text>
    </TouchableOpacity>
  </View>

  {/* other elements */}
</View>

      <Text style={styles.title}>Character Name:</Text>
      
      <TextInput
        style={[styles.input, {color: 'white'}]}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Enter name here"
        placeholderTextColor={"gray"}
      />
      
      <Text style={styles.title}>Character Stats:</Text>
      <View style={{flexDirection: 'column'}}>
  <View style={styles.row}>
    <Text style={[styles.text, {width: 100}]}>Strength:</Text>
    <TouchableOpacity onPress={() => handleStrengthChange(strength - 1)} style={styles.button}>
      <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <Text>-</Text>
      </View>
    </TouchableOpacity>
    <Text style={[styles.text,{textAlign:'center', width: 30, marginHorizontal: 10}]}>{strength}</Text>
    <TouchableOpacity onPress={() => handleStrengthChange(strength + 1)} style={styles.button}>
      <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <Text>+</Text>
      </View>
    </TouchableOpacity>
  </View>

  <View style={styles.row}>
    <Text style={[styles.text, {width: 100}]}>Dexterity:</Text>
    <TouchableOpacity onPress={() => handleDexterityChange(dexterity - 1)} style={styles.button}>
      <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <Text>-</Text>
      </View>
    </TouchableOpacity>
    <Text style={[styles.text,{textAlign:'center', width: 30, marginHorizontal: 10}]}>{dexterity}</Text>
    <TouchableOpacity onPress={() => handleDexterityChange(dexterity + 1)} style={styles.button}>
      <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <Text>+</Text>
      </View>
    </TouchableOpacity>
  </View>

  <View style={styles.row}>
    <Text style={[styles.text, {width: 100}]}>Intelligence:</Text>
    <TouchableOpacity onPress={() => handleIntelligenceChange(intelligence - 1)} style={styles.button}>
      <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <Text>-</Text>
      </View>
    </TouchableOpacity>
    <Text style={[styles.text,{textAlign:'center', width :30 ,marginHorizontal :10}]}>{intelligence}</Text>
    <TouchableOpacity onPress={() => handleIntelligenceChange(intelligence +1)}style={styles.button}>
      <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
        <Text>+</Text>
      </View> 
     </TouchableOpacity> 
   </View> 

   <View style={styles.row}>
     <Text style={[styles.text,{width :100}]}>Charisma:</Text>
     <TouchableOpacity onPress={() => handleCharismaChange(charisma -1)}style={styles.button}>
       <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
         <Text>-</Text>
       </View> 
     </TouchableOpacity> 
     <Text style={[styles.text,{textAlign:'center',width :30 ,marginHorizontal :10}]}>{charisma}</Text>
     <TouchableOpacity onPress={() => handleCharismaChange(charisma +1)}style={styles.button}>
       <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
         <Text>+</Text>
       </View> 
     </TouchableOpacity> 
   </View> 
   
</View> 

      {/* Additional Stats */}
      <View style={{flexDirection: 'column'}}>
  <View style={[styles.row,{justifyContent:'space-between', width: 189}]}>
    <Text style={[styles.text,{textAlign:'left'}]}>Vitality:</Text> 
    <Text style={[styles.text,{textAlign:'right', color:'red'}]}>{health}</Text> 
  </View>
  <View style={[styles.row,{justifyContent:'space-between', width: 189}]}>
    <Text style={[styles.text,{textAlign:'left'}]}>Evasion:</Text> 
    <Text style={[styles.text,{textAlign:'right'}]}>{evasion}</Text> 
  </View>

  <View style={[styles.row,{justifyContent:'space-between', width: 189}]}>
    <Text style={[styles.text,{textAlign:'left'}]}>Vigor:</Text> 
    <Text style={[styles.text,{textAlign:'right'}]}>{vigor}</Text> 
  </View>
</View>

      {/* End of Additional Stats */}
      

      {/* Separator */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/* Edit Screen Info */}
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      
      </View></ScrollView>
      </Provider>
      );
      
      
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row:{
    flexDirection:'row',
    marginVertical:10,
    alignItems:'center'
  },
  text:{
    fontSize:16,
    marginRight:10
  },
  button:{
    fontSize:224,
    backgroundColor: '#111111',
    borderRadius :5,
    width :40,
    height :40,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    height:40,
    width:'300px',
    borderColor:'gray',
    borderWidth:1,
    marginTop:10,
    marginBottom:20,
    paddingHorizontal:10
  }
});
