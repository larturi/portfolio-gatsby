import { useContext } from 'react';
import { GlobalStateContext } from '../context/GlobalContextProvider';

export const useCurrentLanguaje = () => {
  const state = useContext(GlobalStateContext);

  let currentLanguaje = state.selectedLang;

  // En caso de que no haya un idioma seleccionado, se toma el idioma por defecto
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  return {
    currentLanguaje,
  };
};
