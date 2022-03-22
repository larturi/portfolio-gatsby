import './Skills.scss';

import React from 'react';
import loadable from '@loadable/component';
import Title from '../Title';
import SubTitle from '../Title/SubTitle';
import GithubCal from '../GithubCal';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import {
  skillsColorsLight,
  skillsColorsDark,
  skillsColorsBlue,
  skillsColorsYellow,
} from '../../constants/skills_colors';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    skillsFront: strapi {
      tecnologias(
        where: { category: "Frontend", destacado: 1 }
        sort: "sort:asc"
      ) {
        name
        porcentaje
        logo
        category
      }
    }
    skillsBack: strapi {
      tecnologias(
        where: { category: "Backend", destacado: 1 }
        sort: "sort:asc"
      ) {
        name
        porcentaje
        logo
        category
      }
    }
    skillsMobile: strapi {
      tecnologias(
        where: { category: "Mobile", destacado: 1 }
        sort: "sort:asc"
      ) {
        name
        porcentaje
        logo
        category
      }
    }
    skillsDb: strapi {
      tecnologias(
        where: { category: "Database", destacado: 1 }
        sort: "sort:asc"
      ) {
        name
        porcentaje
        logo
        category
      }
    }
    skillsDevOps: strapi {
      tecnologias(
        where: { category: "DevOps", destacado: 1 }
        sort: "sort:asc"
      ) {
        name
        porcentaje
        logo
        category
      }
    }
    skillsOther: strapi {
      tecnologias(
        where: { category: "Other", destacado: 1 }
        sort: "sort:asc"
      ) {
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
  let { currentTheme } = useCurrentTheme();

  const {
    skillsFront,
    skillsBack,
    skillsMobile,
    skillsDb,
    skillsDevOps,
    skillsOther,
  } = useStaticQuery(query);

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

  const { tecnologias: tecnologiasMobile } = skillsMobile;
  const mobileSkills = [];
  tecnologiasMobile.map(skill =>
    mobileSkills.push({ type: skill.name, level: skill.porcentaje })
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

  const getColor = () => {
    switch (currentTheme) {
      case 'light':
        return skillsColorsLight;
      case 'dark':
        return skillsColorsDark;
      case 'blue':
        return skillsColorsBlue;
      case 'yellow':
        return skillsColorsYellow;
      default:
        return skillsColorsDark;
    }
  };

  return (
    <>
      <section className={'section skills ' + currentTheme}>
        <Title title="Skills" theme={currentTheme} />

        <div className="skills-list section-center">
          <SubTitle title="Frontend" theme={currentTheme} />
          <SkillBar
            skills={frontSkills}
            colors={getColor()}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="Backend" theme={currentTheme} />
          <SkillBar
            skills={backSkills}
            colors={getColor()}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="DevOps" theme={currentTheme} />
          <SkillBar
            skills={devOpsSkills}
            colors={getColor()}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="Database" theme={currentTheme} />
          <SkillBar
            skills={dbSkills}
            colors={getColor()}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="Mobile" theme={currentTheme} />
          <SkillBar
            skills={mobileSkills}
            colors={getColor()}
            height={24}
            animationDelay={100}
          />

          <div className="separador-section-skills" />
          <SubTitle title="Other" theme={currentTheme} />
          <SkillBar
            skills={otherSkills}
            colors={getColor()}
            height={24}
            animationDelay={100}
          />
        </div>
      </section>

      <section className={'section skills ' + currentTheme}>
        <div className="about-github-cal">
          <a
            href="https://github.com/larturi"
            aria-label="@larturi on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Title title="@larturi on GitHub" theme={currentTheme} />
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
