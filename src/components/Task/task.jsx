import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static defaultProps = {
    deleteTask: () => {},
    onToggleDone: () => {},
  };

  constructor(props) {
    super(props);

    const {task} = this.props;

    this.state = {
      isEdit: false,
      timerCounter: task.timerCount,
      timer: null
    }
  }

  timerStart = () => {
    const { timer } = this.state;

    if (timer === null) {
      const timerId = setInterval(() => {
        const { timerCounter } = this.state;

        const newCount = timerCounter - 1;
        this.setState({
          timerCounter: newCount
        });

        if (newCount <= 0) {
          this.timerPause();
        }
      }, 1000);

      this.setState({
        timer: timerId
      });
    }
  }

  timerPause = () => {
    const { timer } = this.state;

    clearInterval(timer);
    this.setState({
      timer: null
    });
  }

  render() {
    const { task, deleteTask, onToggleDone } = this.props;
    const { isEdit, timerCounter } = this.state;
    const isDisabled = timerCounter === 0;
    const editInput = isEdit && <input type="text" className="edit" defaultValue={task.description} />;

    const getTimerValue = () => {
      const min = Math.floor(timerCounter < 60 ? 0 : timerCounter/60);
      const sec = timerCounter - (60 * min);
      const seconds = sec < 10 ? `0${sec}` : sec;
      return ` ${min}:${seconds}`
    };

    const getTaskClassName = () => {
      if (task.isDone) {
        return `completed`;
      }
      if (isEdit) {
        return `editing`;
      }
      return ``;
    };

    const timerMarkup = () => {
      if (!task.isDone) {
        return (
          <span className="description">
            <button type="button" className="icon icon-play" aria-label="start-timer" onClick={this.timerStart} disabled={isDisabled}/>
            <button type="button" className="icon icon-pause" aria-label="pause-timer" onClick={this.timerPause} disabled={isDisabled}/>
            {getTimerValue()}
          </span>
        )
      }
      return null;
    };

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
            <span className="title">{task.description}</span>
            {timerMarkup()}
            <span className="description">
              {formatDistanceToNow(new Date(task.creationDate), { includeSeconds: true })}
            </span>
          </label>
          <button type="button" className="icon icon-edit" aria-label="edit-task-button"/>
          <button
            type="button"
            className="icon icon-destroy"
            onClick={() => {
              deleteTask(task.id);
              this.timerPause();
            }}
           aria-label="delete-task-button"/>
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
