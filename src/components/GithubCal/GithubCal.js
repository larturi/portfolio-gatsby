import './GithubCal.scss';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const GithubCal = () => {
  return (
    <GitHubCalendar
      username="larturi"
      color="hsl(185, 81%, 29%)"
      blockSize={12}
      blockMargin={4}
    >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  );
};

export default GithubCal;
