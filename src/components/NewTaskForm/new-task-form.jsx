import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    inputValue: ""
  };

  onInputChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  onAddTask = (evt) => {
    const { addTask } = this.props;
    const { inputValue } = this.state;

    if (evt.key === "Enter") {
      addTask(inputValue);
      this.setState({
        inputValue: ""
      });
    }
  }

  render() {
    return (
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={this.onInputChange} onKeyDown={this.onAddTask} value={this.state.inputValue}/>
    )
  }
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};
