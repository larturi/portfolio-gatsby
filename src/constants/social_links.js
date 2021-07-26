import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon" />,
    url: 'https://github.com/larturi',
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://www.linkedin.com/in/leandroarturi',
  },
  {
    id: 3,
    icon: <FaTwitter className="social-icon" />,
    url: 'https://twitter.com/leandroarturi',
  },
];

export default data;
