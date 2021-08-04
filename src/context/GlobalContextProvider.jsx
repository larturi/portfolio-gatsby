import React, { useReducer } from 'react';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  selectedLang: 'es-AR',
  selectedTheme: 'dark',
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
