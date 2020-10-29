import Task from '../Task/task.jsx';

const getTasks = (todoData, deleteTask) => {
  return (
    todoData.map((task, i) =>
      <Task task={task} deleteTask={deleteTask} key={i}/>
    )
  );
};

const TaskList = ({ todoData, deleteTask }) => {
  return (
    <ul className="todo-list">
      {getTasks(todoData, deleteTask)}
    </ul>
  )
};

export default TaskList;