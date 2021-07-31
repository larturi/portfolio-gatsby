import './GithubCal.scss';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubCal = () => {
  return (
    <GitHubCalendar
      username="larturi"
      color="hsl(185, 81%, 29%)"
      blockSize={20}
    />
  );
};

export default GithubCal;
