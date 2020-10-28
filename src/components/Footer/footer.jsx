import React from 'react';
import TasksFilter from '../TasksFilter/tasks-filter.jsx';

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="footer">
        <span class="todo-count">1 items left</span>
        <TasksFilter/>
        <button class="clear-completed">Clear completed</button>
      </footer>
    </React.Fragment>
  )
};

export default Footer;
