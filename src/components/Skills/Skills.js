import './Skills.scss';

import React, { useContext } from 'react';
import loadable from '@loadable/component';
import Title from '../Title';
import SubTitle from '../Title/SubTitle';
import GithubCal from '../GithubCal';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

import { skillsColors, skillsColorsDark } from '../../constants/skills_colors';

import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    skillsFront: strapi {
      tecnologias(where: { category: "Frontend" }, sort: "porcentaje:desc") {
        name
        porcentaje
        logo
        category
      }
    }
    skillsBack: strapi {
      tecnologias(where: { category: "Backend" }, sort: "porcentaje:desc") {
        name
        porcentaje
        logo
        category
      }
    }
    skillsDb: strapi {
      tecnologias(where: { category: "Database" }, sort: "porcentaje:desc") {
        name
        porcentaje
        logo
        category
      }
    }
    skillsDevOps: strapi {
      tecnologias(where: { category: "DevOps" }, sort: "porcentaje:desc") {
        name
        porcentaje
        logo
        category
      }
    }
    skillsOther: strapi {
      tecnologias(where: { category: "Other" }, sort: "porcentaje:desc") {
        name
        porcentaje
        logo
        category
      }
    }
  }
`;

const SkillBar = loadable(() => import('react-skillbars'));

const Skills = props => {
  const state = useContext(GlobalStateContext);

  let currentLanguaje = state.language;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  const { backgroundWhite = false } = props;

  const { skillsFront, skillsBack, skillsDb, skillsDevOps, skillsOther } =
    useStaticQuery(query);

  const { tecnologias: tecnologiasFront } = skillsFront;
  const frontSkills = [];
  tecnologiasFront.map(skill =>
    frontSkills.push({ type: skill.name, level: skill.porcentaje })
  );

  const { tecnologias: tecnologiasBack } = skillsBack;
  const backSkills = [];
  tecnologiasBack.map(skill =>
    backSkills.push({ type: skill.name, level: skill.porcentaje })
  );

  const { tecnologias: tecnologiasDb } = skillsDb;
  const dbSkills = [];
  tecnologiasDb.map(skill =>
    dbSkills.push({ type: skill.name, level: skill.porcentaje })
  );

  const { tecnologias: tecnologiasDevOps } = skillsDevOps;
  const devOpsSkills = [];
  tecnologiasDevOps.map(skill =>
    devOpsSkills.push({ type: skill.name, level: skill.porcentaje })
  );

  const { tecnologias: tecnologiasOther } = skillsOther;
  const otherSkills = [];
  tecnologiasOther.map(skill =>
    otherSkills.push({ type: skill.name, level: skill.porcentaje })
  );

  const theme = currentLanguaje === 'es-AR' ? 'dark' : 'light';
  console.log(theme);

  return (
    <>
      <section
        className={'section skills ' + (backgroundWhite && 'background-white')}
      >
        <Title title="Skills" />

        <div className="skills-list section-center">
          <SubTitle title="Frontend" />
          <SkillBar
            skills={frontSkills}
            colors={theme === 'dark' ? skillsColorsDark : skillsColors}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="Backend" />
          <SkillBar
            skills={backSkills}
            colors={theme === 'dark' ? skillsColorsDark : skillsColors}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="Database" />
          <SkillBar
            skills={dbSkills}
            colors={theme === 'dark' ? skillsColorsDark : skillsColors}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="DevOps" />
          <SkillBar
            skills={devOpsSkills}
            colors={theme === 'dark' ? skillsColorsDark : skillsColors}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="Other" />
          <SkillBar
            skills={otherSkills}
            colors={theme === 'dark' ? skillsColorsDark : skillsColors}
            height={24}
            animationDelay={100}
          />
        </div>
      </section>

      <section
        className={'section skills ' + (backgroundWhite && 'background-white')}
      >
        <div className="about-github-cal">
          <a
            href="https://github.com/larturi"
            aria-label="@larturi on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Title title="@larturi on GitHub" />
          </a>
          <div className="react-github-container">
            <GithubCal />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
