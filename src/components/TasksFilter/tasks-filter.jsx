import React from 'react';
import PropTypes from 'prop-types';

const FiltersList = {
  "All": "All",
  "Active": "Active",
  "Completed": "Completed"
};

const getFilters = (setFilterTasks, filterTasks) => {
  return (
    Object.values(FiltersList).map((filter, i) =>
      <li key={i}>
        <button className={filterTasks === filter ? `selected` : ``} onClick={setFilterTasks} >{filter}</button>
      </li>
    )
  )
}

const TasksFilter = ({ setFilterTasks, currentFilterTasksValue }) => {
  return (
    <React.Fragment>
      <ul className="filters">
        {getFilters(setFilterTasks, currentFilterTasksValue)}
      </ul>
    </React.Fragment>
  )
};

TasksFilter.propTypes = {
  setFilterTasks: PropTypes.func.isRequired,
  currentFilterTasksValue: PropTypes.string.isRequired
};

export default TasksFilter;
export {FiltersList};
