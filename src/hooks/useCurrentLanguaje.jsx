import { useContext } from 'react';
import { GlobalStateContext } from '../context/GlobalContextProvider';

export const useCurrentLanguaje = () => {
  const state = useContext(GlobalStateContext);

  let currentLanguaje = state.selectedLang;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  return {
    currentLanguaje,
  };
};
