import React, {Component} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
  state = {
    isEdit: false
  };

  render() {
    const { task, deleteTask, onToggleDone } = this.props;
    const { isEdit } = this.state;

    const getTaskClassName = () => {
      if (task.isDone) {
        return `completed`
      } else if (isEdit) {
        return `editing`
      }
      return ``;
    };

    const editInput = isEdit && (
      <input type="text" className="edit" defaultValue={task.description}/>);

    return (
      <li className={getTaskClassName()}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={(evt) => {
            onToggleDone(evt, task.id)}} checked={task.isDone === true} readOnly/>
          <label>
            <span className="description">{task.description}</span>
            <span className="created">{formatDistanceToNow(new Date(2020, 6, 2), { includeSeconds: true, addSuffix: true })}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={() => {
            deleteTask(task.id);
          }}></button>
        </div>
        {editInput}
      </li>
    )
  }
}
