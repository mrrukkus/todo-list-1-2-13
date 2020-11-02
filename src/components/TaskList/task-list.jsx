import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/task';

const getTasks = (todoData, deleteTask, onToggleDone) => {
  return todoData.map((task) => <Task task={task} deleteTask={deleteTask} onToggleDone={onToggleDone} key={task.id} />);
};

const TaskList = ({ todoData, deleteTask, onToggleDone }) => {
  return <ul className="todo-list">{getTasks(todoData, deleteTask, onToggleDone)}</ul>;
};

TaskList.defaultProps = {
  deleteTask: () => {},
  onToggleDone: () => {},
};

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func,
  onToggleDone: PropTypes.func,
};

export default TaskList;
