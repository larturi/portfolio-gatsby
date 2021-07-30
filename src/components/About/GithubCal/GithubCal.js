import React from 'react';

import GitHubCalendar from 'react-github-calendar';

const GithubCal = () => {
  return (
    <GitHubCalendar
      username="larturi"
      color="hsl(184, 77%, 34%)"
      blockSize={14}
    />
  );
};

export default GithubCal;
