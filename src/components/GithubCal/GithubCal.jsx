import './GithubCal.scss';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';

const GithubCal = () => {
  let { currentTheme } = useCurrentTheme();

  return (
    <GitHubCalendar
      username="larturi"
      color={currentTheme === 'dark' ? '#4f348d' : 'hsl(185, 81%, 29%)'}
      blockSize={12}
      blockMargin={4}
    >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  );
};

export default GithubCal;
