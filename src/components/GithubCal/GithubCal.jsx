import './GithubCal.scss';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';

const GithubCal = () => {
  let { currentTheme } = useCurrentTheme();

  const getColor = () => {
    switch (currentTheme) {
      case 'dark':
        return '#BB86FC';

      case 'light':
        return '#2caeba';

      case 'blue':
        return '#2761ad';

      default:
        return '#BB86FC';
    }
  };

  return (
    <GitHubCalendar
      username="larturi"
      color={getColor()}
      blockSize={12}
      blockMargin={5}
      hideColorLegend={true}
    >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  );
};

export default GithubCal;
