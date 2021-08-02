import './GithubCal.scss';

import React, { useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

const GithubCal = () => {
  const state = useContext(GlobalStateContext);

  let currentLanguaje = state.language;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  const theme = currentLanguaje === 'es-AR' ? 'dark' : 'light';

  return (
    <GitHubCalendar
      username="larturi"
      color={theme === 'dark' ? '#4f348d' : 'hsl(185, 81%, 29%)'}
      blockSize={12}
      blockMargin={4}
    >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  );
};

export default GithubCal;
