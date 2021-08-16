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
  SiMysql,
  SiPhp,
  SiBootstrap,
  SiDocker,
  SiAndroid,
  SiXampp,
  SiStrapi,
  SiNextDotJs,
  SiNuxtDotJs,
  SiGraphql,
  SiMongodb,
  SiSocketDotIo,
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

    case 'FaLaravel':
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

    case 'SiMysql':
      return <SiMysql className="tech-icon"></SiMysql>;

    case 'SiPhp':
      return <SiPhp className="tech-icon"></SiPhp>;

    case 'SiStrapi':
      return <SiStrapi className="tech-icon"></SiStrapi>;

    case 'SiNextDotJs':
      return <SiNextDotJs className="tech-icon"></SiNextDotJs>;

    case 'SiNuxtDotJs':
      return <SiNuxtDotJs className="tech-icon"></SiNuxtDotJs>;

    case 'SiGraphql':
      return <SiGraphql className="tech-icon"></SiGraphql>;

    case 'SiMongodb':
      return <SiMongodb className="tech-icon"></SiMongodb>;

    case 'SiSocketDotIo':
      return <SiSocketDotIo className="tech-icon"></SiSocketDotIo>;

    default:
      return <FaGraduationCap className="tech-icon"></FaGraduationCap>;
  }
};

export default IconFa;
