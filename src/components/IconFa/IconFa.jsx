import React from 'react';
import {
  FaAws,
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
  SiApollographql,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiGatsby,
  SiIonic,
  SiMysql,
  SiPhp,
  SiBootstrap,
  SiDocker,
  SiGitlab,
  SiAndroid,
  SiCss3,
  SiXampp,
  SiStrapi,
  SiNextDotJs,
  SiNuxtDotJs,
  SiGraphql,
  SiMongodb,
  SiSocketDotIo,
  SiFirebase,
  SiJest,
  SiSass,
  SiTailwindcss,
  SiWebpack,
  SiHtml5,
  SiOracle,
} from 'react-icons/si';

import { DiScrum } from 'react-icons/di';

const IconFa = props => {
  switch (props.name) {
    case 'FaAws':
      return <FaAws className="tech-icon"></FaAws>;

    case 'SiApollographql':
      return <SiApollographql className="tech-icon"></SiApollographql>;

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

    case 'SiOracle':
      return <SiOracle className="tech-icon"></SiOracle>;

    case 'SiGatsby':
      return <SiGatsby className="tech-icon"></SiGatsby>;

    case 'FaGithub':
      return <FaGithub className="tech-icon"></FaGithub>;

    case 'SiGitlab':
      return <SiGitlab className="tech-icon"></SiGitlab>;

    case 'SiBootstrap':
      return <SiBootstrap className="tech-icon"></SiBootstrap>;

    case 'SiIonic':
      return <SiIonic className="tech-icon"></SiIonic>;

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

    case 'SiFirebase':
      return <SiFirebase className="tech-icon"></SiFirebase>;

    case 'SiJest':
      return <SiJest className="tech-icon"></SiJest>;

    case 'SiSass':
      return <SiSass className="tech-icon"></SiSass>;

    case 'SiTailwindcss':
      return <SiTailwindcss className="tech-icon"></SiTailwindcss>;

    case 'SiWebpack':
      return <SiWebpack className="tech-icon"></SiWebpack>;

    case 'SiHtml5':
      return <SiHtml5 className="tech-icon"></SiHtml5>;

    case 'SiCss3':
      return <SiCss3 className="tech-icon"></SiCss3>;

    default:
      return <FaGraduationCap className="tech-icon"></FaGraduationCap>;
  }
};

export default IconFa;
