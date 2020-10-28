import React from 'react';
import TasksFilter from '../TasksFilter/tasks-filter.jsx';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <TasksFilter/>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </React.Fragment>
  )
};

export default Footer;
