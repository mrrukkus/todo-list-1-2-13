import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  onAddTask = (evt) => {
    const { addTask } = this.props;
    const { inputValue } = this.state;

    if ( evt.key === 'Enter' ) {
      if (inputValue.length === 0) {
        return null;
      }

      addTask(inputValue);
      this.setState({
        inputValue: '',
      });
    }
    return inputValue;
  };

  render() {
    const { inputValue } = this.state;

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={this.onInputChange}
        onKeyDown={this.onAddTask}
        value={inputValue}
      />
    );
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
