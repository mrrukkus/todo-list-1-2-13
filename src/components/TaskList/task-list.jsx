import Task from '../Task/task.jsx';

const getTasks = (todoData) => {
  return (
    todoData.map((task, i) =>
      <Task task={task} key={i}/>
    )
  );
};

const TaskList = ({todoData}) => {
  return (
    <ul className="todo-list">
      {getTasks(todoData)}
    </ul>
  )
};

export default TaskList;