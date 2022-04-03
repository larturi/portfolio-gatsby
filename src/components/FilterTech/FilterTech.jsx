// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';

import './FilterTech.scss';

const FilterTech = ({ items, setFilterTech }) => {
  let { currentTheme } = useCurrentTheme();

  const [countedTechs, setCountedTechs] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const allTechs = [];
    items.forEach(item => {
      item.tecnologias.forEach(tech => {
        allTechs.push(tech.name);
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
  }, []);

  return (
    <div className={`filter-tech__container ${currentTheme}`}>
      {Object.keys(countedTechs).map(tech => {
        return (
          <div
            key={tech}
            className={`filter-tech__container__item ${currentTheme} ${
              (countedTechs[tech][0] === selectedOption && 'selected') || ''
            }`}
            onClick={() => (
              setFilterTech(countedTechs[tech][0]),
              setSelectedOption(countedTechs[tech][0])
            )}
          >
            {countedTechs[tech][0] + ' (' + countedTechs[tech][1] + ')'}
          </div>
        );
      })}
    </div>
  );
};

export default FilterTech;
