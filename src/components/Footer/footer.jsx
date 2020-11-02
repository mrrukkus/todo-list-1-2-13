import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter/tasks-filter';

const Footer = ({ setFilterTasks, currentFilterTasksValue, clearCompleted, activeTasksCount }) => {
  return (
    <>
      <footer className="footer">
        <span className="todo-count">{activeTasksCount} items left</span>
        <TasksFilter setFilterTasks={setFilterTasks} currentFilterTasksValue={currentFilterTasksValue} />
        <button type="button" className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </>
  );
};

Footer.propTypes = {
  setFilterTasks: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  currentFilterTasksValue: PropTypes.string.isRequired,
  activeTasksCount: PropTypes.number.isRequired,
};

export default Footer;
