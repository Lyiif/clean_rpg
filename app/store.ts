import { createStore, combineReducers } from 'redux';

export interface RootState {
  strength: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  attack: number;
  stealth: number;
  marksmanship: number;
  learning: number;
  survival: number;
  medicine: number;
  intimidation: number;
  insight: number;
  appearance: number;
  manipulation: number;
  name: string;
}

/*export interface store {
  strength: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  attack: number;
  stealth: number;
  marksmanship: number;
  learning: number;
  survival: number;
  medicine: number;
  intimidation: number;
  insight: number;
  appearance: number;
  manipulation: number;
  name: string;
}*/

const initialState: RootState = {
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  charisma: 0,
  attack: 0,
  stealth: 0,
  marksmanship: 0,
  learning: 0,
  survival: 0,
  medicine: 0,
  intimidation: 0,
  insight: 0,
  appearance: 0,
  manipulation: 0,
  name: '',
};

interface SetStrengthAction {
  type: 'SET_STRENGTH';
  payload: number;
}

interface SetDexterityAction {
  type: 'SET_DEXTERITY';
  payload: number;
}

interface SetIntelligenceAction {
  type: 'SET_INTELLIGENCE';
  payload: number;
}

interface SetCharismaAction {
  type: 'SET_CHARISMA';
  payload: number;
}

interface SetAttackAction {
  type: 'SET_ATTACK';
  payload: number;
}

interface SetStealthAction {
  type: 'SET_STEALTH';
  payload: number;
}

interface SetMarksmanshipAction {
  type: 'SET_MARKSMANSHIP';
  payload: number;
}

interface SetLearningAction {
  type: 'SET_LEARNING';
  payload: number;
}

interface SetSurvivalAction {
  type: 'SET_SURVIVAL';
  payload: number;
}

interface SetMedicineAction {
  type: 'SET_MEDICINE';
  payload: number;
}

interface SetIntimidationAction {
  type: 'SET_INTIMIDATION';
  payload: number;
}

interface SetInsightAction {
  type: 'SET_INSIGHT';
  payload: number;
}

interface SetAppearanceAction {
  type: 'SET_APPEARANCE';
  payload: number;
}

interface SetManipulationAction {
  type: 'SET_MANIPULATION';
  payload: number;
}

interface SetNameAction {
  type: 'SET_NAME';
  payload: string; // Added payload type for string
}




type AppAction =
  | SetStrengthAction
  | SetDexterityAction
  | SetIntelligenceAction
  | SetCharismaAction
  | SetAttackAction
  | SetStealthAction
  | SetMarksmanshipAction
  | SetLearningAction
  | SetSurvivalAction
  | SetMedicineAction
  | SetIntimidationAction
  | SetInsightAction
  | SetAppearanceAction
  | SetManipulationAction
  | SetNameAction;

  function rootReducer(state: RootState = initialState, action: AppAction): RootState {
    switch (action.type) {
      case 'SET_STRENGTH':
        return { ...state, strength: action.payload };
      case 'SET_DEXTERITY':
        return { ...state, dexterity: action.payload };
      case 'SET_INTELLIGENCE':
        return { ...state, intelligence: action.payload };
      case 'SET_CHARISMA':
        return { ...state, charisma: action.payload };
      case 'SET_ATTACK':
        return { ...state, attack: action.payload };
      case 'SET_STEALTH':
        return { ...state, stealth: action.payload };
      case 'SET_MARKSMANSHIP':
        return { ...state, marksmanship: action.payload };
      case 'SET_LEARNING':
        return { ...state, learning: action.payload };
      case 'SET_SURVIVAL':
        return { ...state, survival: action.payload };
      case 'SET_MEDICINE':
        return { ...state, medicine: action.payload };
      case 'SET_INTIMIDATION':
        return { ...state, intimidation: action.payload };
      case 'SET_INSIGHT':
        return { ...state, insight: action.payload };
      case 'SET_APPEARANCE':
        return { ...state, appearance: action.payload };
      case 'SET_MANIPULATION':
        return { ...state, manipulation: action.payload };
      case 'SET_NAME':
        return { ...state, name: action.payload };
      default:
        return state;
    }
  }
  

const store = createStore(rootReducer);

export default store;