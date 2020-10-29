import React, {Component} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
  constructor({task}) {
    super();

    this.state = {
      isDone: task.isDone,
      isEdit: false
    };

    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  onCheckboxClick() {
    this.setState((state) => {
      return {
        isDone: !state.isDone
      }
    });
  }

  render() {
    const { task, deleteTask } = this.props;
    const { isDone, isEdit } = this.state;

    const getTaskClassName = () => {
      if (isDone) {
        return `completed`
      } else if (isEdit) {
        return `editing`
      }
      return ``;
    };

    const editInput = isEdit && (
      <input type="text" className="edit" defaultValue={task.description}/>)

    return (
      <li className={getTaskClassName()}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.onCheckboxClick} defaultChecked={isDone === true}/>
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
