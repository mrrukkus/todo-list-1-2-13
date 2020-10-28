import Task from '../Task/task.jsx';

const tasksStateList = ["completed", "editing", "view"];

const getTasks = () => {
  return (
    tasksStateList.map((taskState, i) =>
      <Task taskState={taskState} key={i}/>
    )
  );
};

const TaskList = () => {
  return (
    <ul className="todo-list">
      {getTasks()}
    </ul>
  )
};

export default TaskList;