import React from 'react';
import Icons from '../../../constants/Icons';

interface Props {
  filterName: string;
}

const FilterPanel: React.FC<Props> = ({ filterName }) => {
  return (
    <div className="filter-panel">
      <div className="filter-name">
        <span className="filter-text">{filterName}</span>
        <i className="material-icons float-right">{Icons.rightArrow}</i>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default FilterPanel;
