import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import IconoFa from '../IconFa';

import './FilterTech.scss';

const FilterTech = ({ items, setFilterTech }) => {
  let { currentTheme } = useCurrentTheme();

  const [countedTechs, setCountedTechs] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = tech => {
    if (selectedOption === getNameTech(tech)) {
      setSelectedOption(null);
      setFilterTech(null);
    } else {
      setFilterTech(getNameTech(tech));
      setSelectedOption(getNameTech(tech));
    }
  };

  useEffect(() => {
    const allTechs = [];
    items.forEach(item => {
      item.tecnologias.forEach(tech => {
        allTechs.push(tech.name + '_' + tech.logo);
      });
    });

    const allTechsCount = lodash.countBy(allTechs);
    var sortable = [];
    for (var tech in allTechsCount) {
      sortable.push([tech, allTechsCount[tech]]);
    }

    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });

    setCountedTechs(sortable);
  }, [items, selectedOption]);

  const excludedTechs = [
    'Android SDK',
    'Apollo',
    'CSS',
    'Firebase',
    'GitHub',
    'Jest',
    'Leadership',
    'MongoDB',
    'MySQL',
    'Postgres',
    'SASS',
    'Scrum',
    'Socket.io',
    'Webpack',
  ];

  const getNameTech = tech => {
    return countedTechs[tech][0].split('_')[0];
  };

  const getNameIconName = tech => {
    return countedTechs[tech][0].split('_')[1];
  };

  return (
    <div className={`filter-tech__container ${currentTheme}`}>
      {Object.keys(countedTechs).map(tech => {
        if (excludedTechs.includes(getNameTech(tech))) {
          return null;
        } else {
          return (
            <div
              key={tech}
              aria-hidden="true"
              className={`filter-tech__container__item ${currentTheme} ${
                (getNameTech(tech) === selectedOption && 'selected') || ''
              }`}
              onClick={() => handleClick(tech)}
            >
              <span>
                <IconoFa name={getNameIconName(tech)} />
                {getNameTech(tech) + ' (' + countedTechs[tech][1] + ')'}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FilterTech;
