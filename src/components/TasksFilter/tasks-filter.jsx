import React from 'react';

const TasksFilter = () => {
  return (
    <React.Fragment>
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    </React.Fragment>
  )
};

export default TasksFilter;
