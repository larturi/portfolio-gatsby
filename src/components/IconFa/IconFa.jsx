import React from 'react';
import {
  FaReact,
  FaGraduationCap,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaLaravel,
  FaAngular,
  FaBitcoin,
  FaGithub,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiGatsby,
  SiBootstrap,
  SiDocker,
  SiAndroid,
  SiXampp,
} from 'react-icons/si';

import { DiScrum } from 'react-icons/di';

const IconFa = props => {
  switch (props.name) {
    case 'fab fa-react':
      return <FaReact className="tech-icon"></FaReact>;

    case 'fab fa-vuejs':
      return <FaVuejs className="tech-icon"></FaVuejs>;

    case 'fab fa-node-js':
      return <FaNodeJs className="tech-icon"></FaNodeJs>;

    case 'fab fa-python':
      return <FaPython className="tech-icon"></FaPython>;

    case 'fab fa-laravel':
      return <FaLaravel className="tech-icon"></FaLaravel>;

    case 'fab fa-angular':
      return <FaAngular className="tech-icon"></FaAngular>;

    case 'fab fa-js':
      return <SiJavascript className="tech-icon"></SiJavascript>;

    case 'SiTypescript':
      return <SiTypescript className="tech-icon"></SiTypescript>;

    case 'SiDart':
      return <SiDart className="tech-icon"></SiDart>;

    case 'SiFlutter':
      return <SiFlutter className="tech-icon"></SiFlutter>;

    case 'FaBitcoin':
      return <FaBitcoin className="tech-icon"></FaBitcoin>;

    case 'SiGatsby':
      return <SiGatsby className="tech-icon"></SiGatsby>;

    case 'FaGithub':
      return <FaGithub className="tech-icon"></FaGithub>;

    case 'SiBootstrap':
      return <SiBootstrap className="tech-icon"></SiBootstrap>;

    case 'SiDocker':
      return <SiDocker className="tech-icon"></SiDocker>;

    case 'SiAndroid':
      return <SiAndroid className="tech-icon"></SiAndroid>;

    case 'SiXampp':
      return <SiXampp className="tech-icon"></SiXampp>;

    case 'DiScrum':
      return <DiScrum className="tech-icon"></DiScrum>;

    default:
      return <FaGraduationCap className="tech-icon"></FaGraduationCap>;
  }
};

export default IconFa;
