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
    setFilterTech(countedTechs[tech][0].split('_')[0]);
    setSelectedOption(countedTechs[tech][0].split('_')[0]);
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
  }, [items]);

  return (
    <div className={`filter-tech__container ${currentTheme}`}>
      {Object.keys(countedTechs).map(tech => {
        console.log([tech]);
        return (
          <div
            key={tech}
            aria-hidden="true"
            className={`filter-tech__container__item ${currentTheme} ${
              (countedTechs[tech][0] === selectedOption && 'selected') || ''
            }`}
            onClick={() => handleClick(tech)}
          >
            <span>
              <IconoFa name={countedTechs[tech][0].split('_')[1]} />
              {countedTechs[tech][0].split('_')[0] +
                ' (' +
                countedTechs[tech][1] +
                ')'}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FilterTech;
