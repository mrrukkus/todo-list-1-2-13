import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.minsRef = createRef();
    this.secondsRef = createRef();
    this.descriptionRef = createRef();
  }

  onAddTask = (evt) => {
    const { addTask } = this.props;

    const descriptionRef = this.descriptionRef.current;
    const secondsRef = this.secondsRef.current;
    const minsRef = this.minsRef.current;

    const getTimerCount = () => {
      const minutes = Number(minsRef.value);
      const seconds = Number(secondsRef.value);
      return minutes*60 + seconds;
    };

    if (evt.key === 'Enter') {
      if (descriptionRef.value.length === 0) {
        return null;
      }

      addTask(descriptionRef.value, getTimerCount());
      descriptionRef.value = ``;
      secondsRef.value = ``;
      minsRef.value = ``;
    }
    return descriptionRef.value;
  };

  render() {
    return (
      <form className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          ref={this.descriptionRef}
          onChange={this.onInputChange}
          onKeyDown={this.onAddTask}
        />
        <input type="number" className="new-todo-form__timer" ref={this.minsRef} placeholder="Min" onKeyDown={this.onAddTask}/>
        <input type="number" className="new-todo-form__timer" ref={this.secondsRef} placeholder="Sec" onKeyDown={this.onAddTask}/>
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
