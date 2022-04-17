import React, { useReducer } from 'react';
import { THEME_DEFAULT, LANG_DEFAULT } from '../constants/global';
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  selectedLang: LANG_DEFAULT,
  selectedTheme: THEME_DEFAULT,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE': {
      return {
        ...state,
        selectedLang: action.payload,
      };
    }

    case 'SET_THEME': {
      return {
        ...state,
        selectedTheme: action.payload,
      };
    }

    default:
      throw new Error('Unknown action type');
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
