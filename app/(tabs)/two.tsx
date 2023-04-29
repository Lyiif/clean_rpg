import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';

import { useSelector } from 'react-redux';
import { RootState } from '../store';
import * as actions from '../actions';
import { useDispatch } from 'react-redux';

//import charisma from "C:/Users/overheaven/rpg_base/app/(tabs)/index.tsx";


export default function TabTwoScreen() {
  
  const strength = useSelector((state: RootState) => state.strength);
  const dexterity = useSelector((state: RootState) => state.dexterity);
  const intelligence = useSelector((state: RootState) => state.intelligence);
  const charisma = useSelector((state: RootState) => state.charisma);

  const dispatch = useDispatch();
  //STRENGTH
//STRENGTH
// STRENGTH
const attack = useSelector((state: RootState) => state.attack);

const setAttackValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= strength) { 
    dispatch(actions.setAttack(value));
  }
};

// DEXTERITY
const stealth = useSelector((state: RootState) => state.stealth);

const setStealthValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= dexterity) {
    dispatch(actions.setStealth(value));
  }
  else{
    console.log(value);
  }
};

const marksmanship = useSelector((state: RootState) => state.marksmanship);

const setMarksmanshipValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= dexterity) {
    dispatch(actions.setMarksmanship(value));
  }
};

// INTELLIGENCE
const learning = useSelector((state: RootState) => state.learning);

const setLearningValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= intelligence) {
    dispatch(actions.setLearning(value));
  }
};

const survival = useSelector((state: RootState) => state.survival);

const setSurvivalValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= intelligence) {
    dispatch(actions.setSurvival(value));
  }
};

const medicine = useSelector((state: RootState) => state.medicine);

const setMedicineValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= intelligence) {
    dispatch(actions.setMedicine(value));
  }
};

// CHARISMA
const intimidation = useSelector((state: RootState) => state.intimidation);

const setIntimidationValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= charisma) {
    dispatch(actions.setIntimidation(value));
  }
};

const insight = useSelector((state: RootState) => state.insight);

const setInsightValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= charisma) {
    dispatch(actions.setInsight(value));
  }
};

const appearance = useSelector((state: RootState) => state.appearance);

const setAppearanceValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= charisma) {
    dispatch(actions.setAppearance(value));
  }
};

const manipulation = useSelector((state: RootState) => state.manipulation);

const setManipulationValue = (value: number) => {
  if (value >= 0 && value <=5 && value <= charisma) {
    dispatch(actions.setManipulation(value));
  }



  
};



  function getSkillLevel(value: number): React.ReactNode {
    if (value == 0) return 'Untrained';
    if (value == 1) return 'Novice';
    if (value == 2) return 'Apprentice';
    if (value == 3) return 'Adept';
    if (value == 4) return 'Expert';
    return 'Master';  }

  // Function to export the variables



  
  return (
    <ScrollView style={{ paddingLeft: 10 }}>
      
      <Text style={styles.title}>Character Skills:</Text>  
      <View style={styles.row}>

<View style={{ flexDirection: 'column', flex: 1 }}>
<View style={{ flex: 1, paddingLeft: 10 }}>
  <Text style={[styles.text, {width: 100, marginHorizontal: 30,textDecorationLine: 'underline', marginTop:20}]}>Strength:</Text>


<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Attack:</Text>
  <TouchableOpacity onPress={() => setAttackValue(attack - 1)} style={styles.button}>
    <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
      <Text>-</Text>
    </View>
  </TouchableOpacity>
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(attack)}</Text>
    <TouchableOpacity onPress={() => setAttackValue(attack +1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
   </TouchableOpacity> 
</View> 






<View style={styles.row}>
  <Text style={[styles.text, {width: 100, marginHorizontal: 30,textDecorationLine: 'underline', marginTop:20}]}>Dexterity:</Text>
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Stealth:</Text>
  <TouchableOpacity onPress={() => setStealthValue(stealth -1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(stealth)}</Text>
  <TouchableOpacity onPress={() => setStealthValue(stealth +1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Marksmanship:</Text>
  <TouchableOpacity onPress={() => setMarksmanshipValue(marksmanship -1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(marksmanship)}</Text>
  <TouchableOpacity onPress={() => setMarksmanshipValue(marksmanship +1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>
</View>






<View style={styles.row}>
  <Text style={[styles.text, {width: 100, marginHorizontal: 30,textDecorationLine: 'underline', marginTop:20}]}>Intelligence:</Text>
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Learning:</Text>
  <TouchableOpacity onPress={() => setLearningValue(learning -1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(learning)}</Text>
  <TouchableOpacity onPress={() => setLearningValue(learning +1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Survival:</Text>
  <TouchableOpacity onPress={() => setSurvivalValue(survival -1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(survival)}</Text>
  <TouchableOpacity onPress={() => setSurvivalValue(survival +1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Medicine:</Text>
  <TouchableOpacity onPress={() => setMedicineValue(medicine -1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(medicine)}</Text>
  <TouchableOpacity onPress={() => setMedicineValue(medicine +1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>
</View>



<View style={{ flex: 1, justifyContent:'space-between' }}>
<View style={styles.row}>
  <Text style={[styles.text, {width: 100, marginHorizontal: 30,textDecorationLine: 'underline'}]}>Charisma:</Text>
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Intimidation:</Text>
  <TouchableOpacity onPress={() => setIntimidationValue(intimidation -1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(intimidation)}</Text>
  <TouchableOpacity onPress={() => setIntimidationValue(intimidation +1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Insight:</Text>
  <TouchableOpacity onPress={() => setInsightValue(insight -1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(insight)}</Text>
  <TouchableOpacity onPress={() => setInsightValue(insight +1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Appearance:</Text>
  <TouchableOpacity onPress={() => setAppearanceValue(appearance - 1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(appearance)}</Text>
  <TouchableOpacity onPress={() => setAppearanceValue(appearance + 1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>

<View style={styles.row}>
  <Text style={[styles.text, {width: 150}]}> Manipulation:</Text>
  <TouchableOpacity onPress={() => setManipulationValue(manipulation - 1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>-</Text>
    </View> 
  </TouchableOpacity> 
  <Text style={[styles.text, { textAlign: 'center', width: 100, paddingHorizontal: 10 }]}>{getSkillLevel(manipulation)}</Text>
  <TouchableOpacity onPress={() => setManipulationValue(manipulation + 1)}style={styles.button}>
    <View style={{justifyContent:'center',alignItems:'center',width :'100%',height :'100%'}}>
      <Text>+</Text>
    </View> 
  </TouchableOpacity> 
</View>
   
</View> 
</View>

      {/* Additional Stats */}
      

      {/* End of Additional Stats */}
      

      {/* Separator */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/* Edit Screen Info */}
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      </ScrollView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginRight: 10
  },
  button: {
    fontSize: 22,
    backgroundColor: '#111111',
    borderRadius: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10
  }
});
