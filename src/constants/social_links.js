import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const data = [
  {
    id: 1,
    icon: <FaGithub />,
    url: 'https://github.com/larturi',
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/leandroarturi',
  },
  {
    id: 3,
    icon: <FaTwitter />,
    url: 'https://twitter.com/leandroarturi',
  },
  {
    id: 4,
    icon: <SiGmail />,
    url: 'mailto:lea.arturi@gmail.com?subject=Contacto%20desde%20leandroarturi.com',
  },
];

export default data;
