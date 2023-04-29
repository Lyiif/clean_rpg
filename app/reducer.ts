// reducer.ts
const initialState = {
    strength: 0,
    dexterity: 0,
    intelligence: 0,
    charisma: 0,
    // other state properties
  };
  
  const rootReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'SET_STRENGTH':
        return {
          ...state,
          strength: action.payload,
        };
      case 'SET_DEXTERITY':
        return {
          ...state,
          dexterity: action.payload,
        };
      case 'SET_INTELLIGENCE':
        return {
          ...state,
          intelligence: action.payload,
        };
      case 'SET_CHARISMA':
        return {
          ...state,
          charisma: action.payload,
        };
      // handle other actions here
      default:
        return state;
    }
  };
  
  export default rootReducer;
  