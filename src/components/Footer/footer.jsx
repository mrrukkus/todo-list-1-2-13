import React from 'react';
import TasksFilter from '../TasksFilter/tasks-filter.jsx';

const Footer = ({ setFilterTasks, filterTasks, clearCompleted }) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <TasksFilter setFilterTasks={setFilterTasks} filterTasks={filterTasks}/>
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      </footer>
    </React.Fragment>
  )
};

export default Footer;
