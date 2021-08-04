import { useContext } from 'react';
import { GlobalStateContext } from '../context/GlobalContextProvider';

export const useCurrentTheme = () => {
  const state = useContext(GlobalStateContext);

  let currentTheme = state.selectedTheme;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme'))
      currentTheme = localStorage.getItem('theme');
  }

  return {
    currentTheme,
  };
};
