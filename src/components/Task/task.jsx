import React, {Component} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
  constructor() {
    super();

    this.state = {
      isDone: false,
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
    return (
      <li className={this.state.isDone ? "completed" : "view"}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.onCheckboxClick}/>
          <label>
            <span className="description">{this.state.isDone ? "Completed" : "Active"} task</span>
            <span className="created">{formatDistanceToNow(new Date(2020, 6, 2), { includeSeconds: true, addSuffix: true })}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
          {this.state.isEdit && (
          <input type="text" className="edit" defaultValue="Editing task"/>
          )}
        </div>
      </li>
    )
  }
}
