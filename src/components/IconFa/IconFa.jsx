import React from 'react';

import {
  FaAngular,
  FaAws,
  FaBitcoin,
  FaGithub,
  FaGraduationCap,
  FaLaravel,
  FaMountain,
  FaNodeJs,
  FaPython,
  FaReact,
  FaUbuntu,
  FaVuejs,
  FaWordpress,
} from 'react-icons/fa';

import {
  SiAndroid,
  SiApollographql,
  SiBootstrap,
  SiConfluence,
  SiCss3,
  SiDart,
  SiDjango,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGatsby,
  SiGitlab,
  SiGoland,
  SiGraphql,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiJest,
  SiJira,
  SiJquery,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNuxtdotjs,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiSass,
  SiSocketdotio,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiVite,
  SiWebpack,
  SiXampp,
} from 'react-icons/si';

import { DiScrum } from 'react-icons/di';

const IconFa = props => {
  switch (props.name) {
    case 'FaAngular':
      return <FaAngular className="tech-icon"></FaAngular>;

    case 'FaAws':
      return <FaAws className="tech-icon"></FaAws>;

    case 'FaBitcoin':
      return <FaBitcoin className="tech-icon"></FaBitcoin>;

    case 'FaGithub':
      return <FaGithub className="tech-icon"></FaGithub>;

    case 'SiGitlab':
      return <SiGitlab className="tech-icon"></SiGitlab>;

    case 'FaLaravel':
      return <FaLaravel className="tech-icon"></FaLaravel>;

    case 'FaMountain':
      return <FaMountain className="tech-icon"></FaMountain>;

    case 'FaNodeJs':
      return <FaNodeJs className="tech-icon"></FaNodeJs>;

    case 'FaPython':
      return <FaPython className="tech-icon"></FaPython>;

    case 'FaReact':
      return <FaReact className="tech-icon"></FaReact>;

    case 'FaUbuntu':
      return <FaUbuntu className="tech-icon"></FaUbuntu>;

    case 'FaVuejs':
      return <FaVuejs className="tech-icon"></FaVuejs>;

    case 'FaWordpress':
      return <FaWordpress className="tech-icon"></FaWordpress>;

    case 'DiScrum':
      return <DiScrum className="tech-icon"></DiScrum>;

    case 'SiAndroid':
      return <SiAndroid className="tech-icon"></SiAndroid>;

    case 'SiPrisma':
      return <SiPrisma className="tech-icon"></SiPrisma>;

    case 'SiApollographql':
      return <SiApollographql className="tech-icon"></SiApollographql>;

    case 'SiBootstrap':
      return <SiBootstrap className="tech-icon"></SiBootstrap>;

    case 'SiConfluence':
      return <SiConfluence className="tech-icon"></SiConfluence>;

    case 'SiCss3':
      return <SiCss3 className="tech-icon"></SiCss3>;

    case 'SiDart':
      return <SiDart className="tech-icon"></SiDart>;

    case 'SiDjango':
      return <SiDjango className="tech-icon"></SiDjango>;

    case 'SiDocker':
      return <SiDocker className="tech-icon"></SiDocker>;

    case 'SiFirebase':
      return <SiFirebase className="tech-icon"></SiFirebase>;

    case 'SiFlutter':
      return <SiFlutter className="tech-icon"></SiFlutter>;

    case 'SiGatsby':
      return <SiGatsby className="tech-icon"></SiGatsby>;

    case 'SiGoland':
      return <SiGoland className="tech-icon"></SiGoland>;

    case 'SiGraphql':
      return <SiGraphql className="tech-icon"></SiGraphql>;

    case 'SiHtml5':
      return <SiHtml5 className="tech-icon"></SiHtml5>;

    case 'SiIonic':
      return <SiIonic className="tech-icon"></SiIonic>;

    case 'SiJavascript':
      return <SiJavascript className="tech-icon"></SiJavascript>;

    case 'SiJest':
      return <SiJest className="tech-icon"></SiJest>;

    case 'SiJira':
      return <SiJira className="tech-icon"></SiJira>;

    case 'SiJquery':
      return <SiJquery className="tech-icon"></SiJquery>;

    case 'SiMaterialui':
      return <SiMaterialui className="tech-icon"></SiMaterialui>;

    case 'SiMongodb':
      return <SiMongodb className="tech-icon"></SiMongodb>;

    case 'SiMysql':
      return <SiMysql className="tech-icon"></SiMysql>;

    case 'SiNextDotJs':
      return <SiNextdotjs className="tech-icon"></SiNextdotjs>;

    case 'SiNuxtDotJs':
      return <SiNuxtdotjs className="tech-icon"></SiNuxtdotjs>;

    case 'SiOracle':
      return <SiOracle className="tech-icon"></SiOracle>;

    case 'SiPhp':
      return <SiPhp className="tech-icon"></SiPhp>;

    case 'SiPostgresql':
      return <SiPostgresql className="tech-icon"></SiPostgresql>;

    case 'SiSocketDotIo':
      return <SiSocketdotio className="tech-icon"></SiSocketdotio>;

    case 'SiStrapi':
      return <SiStrapi className="tech-icon"></SiStrapi>;

    case 'SiSass':
      return <SiSass className="tech-icon"></SiSass>;

    case 'SiTailwindcss':
      return <SiTailwindcss className="tech-icon"></SiTailwindcss>;

    case 'SiTypescript':
      return <SiTypescript className="tech-icon"></SiTypescript>;

    case 'SiVisualstudio':
      return <SiVisualstudio className="tech-icon"></SiVisualstudio>;

    case 'SiVite':
      return <SiVite className="tech-icon"></SiVite>;

    case 'SiWebpack':
      return <SiWebpack className="tech-icon"></SiWebpack>;

    case 'SiXampp':
      return <SiXampp className="tech-icon"></SiXampp>;

    default:
      return <FaGraduationCap className="tech-icon"></FaGraduationCap>;
  }
};

export default IconFa;
