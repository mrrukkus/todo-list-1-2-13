const NewTaskForm = ({ addTask }) => {
  return (
    <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={addTask}/>
  )
};

export default NewTaskForm;
