import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

const Task = ({ task, deleteTask, onToggleDone }) => {
  const [isEdit] = useState(false);
  const [timerCounter, setTimerCounter] = useState(task.timerCount);
  const [timer, setTimer] = useState(null);

  const isDisabled = timerCounter === 0;
  const editInput = isEdit && <input type="text" className="edit" defaultValue={task.description} />;

  const timerPause = () => {
    clearInterval(timer);
    setTimer(null);
  }

  const timerStart = () => {
    if (timer === null) {
      const timerId = setInterval(() => {

        const newCount = timerCounter - 1;
        setTimerCounter(newCount);

        if (newCount <= 0) {
          timerPause();
        }
      }, 1000);

      setTimer(timerId);
    }
  }

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
          <button type="button" className="icon icon-play" aria-label="start-timer" onClick={timerStart} disabled={isDisabled}/>
          <button type="button" className="icon icon-pause" aria-label="pause-timer" onClick={timerPause} disabled={isDisabled}/>
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
            timerPause();
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
            timerPause();
          }}
        aria-label="delete-task-button"/>
      </div>
      {editInput}
    </li>
  )
};

Task.propTypes = {
  task: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteTask: PropTypes.func,
  onToggleDone: PropTypes.func,
};

Task.defaultProps = {
  deleteTask: () => {},
  onToggleDone: () => {}
};

export default Task;
