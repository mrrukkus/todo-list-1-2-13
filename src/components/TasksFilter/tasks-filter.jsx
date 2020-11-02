import React from 'react';
import PropTypes from 'prop-types';

const FiltersList = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed',
};

const getFilters = (setFilterTasks, filterTasks) => {
  return Object.values(FiltersList).map((filter) => (
    <li key={filter}>
      <button type="button" className={filterTasks === filter ? `selected` : ``} onClick={setFilterTasks}>
        {filter}
      </button>
    </li>
  ));
};

const TasksFilter = ({ setFilterTasks, currentFilterTasksValue }) => {
  return (
    <>
      <ul className="filters">{getFilters(setFilterTasks, currentFilterTasksValue)}</ul>
    </>
  );
};

TasksFilter.propTypes = {
  setFilterTasks: PropTypes.func.isRequired,
  currentFilterTasksValue: PropTypes.string.isRequired,
};

export default TasksFilter;
export { FiltersList };
