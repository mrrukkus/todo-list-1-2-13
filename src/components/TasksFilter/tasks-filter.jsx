import React from 'react';

const TasksFilter = () => {
  return (
    <React.Fragment>
      <ul class="filters">
        <li>
          <button class="selected">All</button>
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
