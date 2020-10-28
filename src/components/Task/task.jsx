import React from 'react';

const Task = ({taskState}) => {
  switch (taskState) {
    case ("completed"):
      return (
        <>
          <li class="completed">
            <div class="view">
              <input class="toggle" type="checkbox"/>
              <label>
                <span class="description">Completed task</span>
                <span class="created">created 17 seconds ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
          </li>
        </>
      )
    case ("editing"):
      return (
        <>
          <li class="editing">
            <div class="view">
              <input class="toggle" type="checkbox"/>
              <label>
                <span class="description">Editing task</span>
                <span class="created">created 5 minutes ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
            <input type="text" class="edit" value="Editing task"/>
          </li>
        </>
      )
    case ("view"):
      return (
        <li>
          <div class="view">
            <input class="toggle" type="checkbox"/>
            <label>
              <span class="description">Active task</span>
              <span class="created">created 5 minutes ago</span>
            </label>
            <button class="icon icon-edit"></button>
            <button class="icon icon-destroy"></button>
          </div>
        </li>
      )
  }
};

export default Task;
