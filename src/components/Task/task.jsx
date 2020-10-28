const Task = ({taskState}) => {
  switch (taskState) {
    case ("completed"):
      return (
        <>
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description">Completed task</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
        </>
      )
    case ("editing"):
      return (
        <>
          <li className="editing">
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description">Editing task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" defaultValue="Editing task"/>
          </li>
        </>
      )
    case ("view"):
      return (
        <li>
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
              <span className="description">Active task</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
      )
      default:
        return null;
  }
};

export default Task;
