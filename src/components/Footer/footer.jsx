import React from 'react';
import TasksFilter from '../TasksFilter/tasks-filter.jsx';

const Footer = ({ setFilterTasks, currentFilterTasksValue, clearCompleted, activeTasksCount }) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <span className="todo-count">{activeTasksCount} items left</span>
        <TasksFilter setFilterTasks={setFilterTasks} currentFilterTasksValue={currentFilterTasksValue}/>
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      </footer>
    </React.Fragment>
  )
};

export default Footer;
