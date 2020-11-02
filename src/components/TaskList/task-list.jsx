import Task from '../Task/task.jsx';

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

export default TaskList;