import React, { useReducer } from 'react';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  selectedLang: 'es-AR',
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOOGLE_LANGUAGE': {
      return {
        ...state,
        selectedLang: state.selectedLang === 'es-AR' ? 'en' : 'es-AR',
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
