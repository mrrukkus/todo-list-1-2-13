import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static defaultProps = {
    deleteTask: () => {},
    onToggleDone: () => {},
  };

  state = {
    isEdit: false,
  };

  render() {
    const { task, deleteTask, onToggleDone } = this.props;
    const { isEdit } = this.state;

    const getTaskClassName = () => {
      if (task.isDone) {
        return `completed`;
      }
      if (isEdit) {
        return `editing`;
      }
      return ``;
    };

    const editInput = isEdit && <input type="text" className="edit" defaultValue={task.description} />;

    return (
      <li className={getTaskClassName()}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={() => {
              onToggleDone(task.id);
            }}
            checked={task.isDone === true}
            readOnly
          />
          <label>
            <span className="description">{task.description}</span>
            <span className="created">
              {formatDistanceToNow(new Date(task.creationDate), { includeSeconds: true })}
            </span>
          </label>
          <button type="button" className="icon icon-edit">
            {' '}
          </button>
          <button
            type="button"
            className="icon icon-destroy"
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            {' '}
          </button>
        </div>
        {editInput}
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteTask: PropTypes.func,
  onToggleDone: PropTypes.func,
};
