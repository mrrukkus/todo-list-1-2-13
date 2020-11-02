import Task from '../Task/task.jsx';
import PropTypes from 'prop-types';

const getTasks = (todoData, deleteTask, onToggleDone) => {
  return (
    todoData.map((task, i) =>
      <Task task={task} deleteTask={deleteTask} onToggleDone={onToggleDone} key={i}/>
    )
  );
};

const TaskList = ({ todoData, deleteTask, onToggleDone }) => {
  return (
    <ul className="todo-list">
      {getTasks(todoData, deleteTask, onToggleDone)}
    </ul>
  )
};

TaskList.defaultProps = {
  deleteTask: () => {},
  onToggleDone: () => {}
}

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func,
  onToggleDone: PropTypes.func
};

export default TaskList;