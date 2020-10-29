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
    const {task} = this.props;

    const getTaskClassName = () => {
      if (this.state.isDone) {
        return `completed`
      } else if (this.state.isEdit) {
        return `editing`
      }
      return ``;
    };

    console.log(getTaskClassName());
    const editInput = this.state.isEdit && (
      <input type="text" className="edit" defaultValue={task.description}/>
      )

    return (
      <li className={getTaskClassName()}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.onCheckboxClick}/>
          <label>
            <span className="description">{task.description}</span>
            <span className="created">{formatDistanceToNow(new Date(2020, 6, 2), { includeSeconds: true, addSuffix: true })}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        {editInput}
      </li>
    )
  }
}
