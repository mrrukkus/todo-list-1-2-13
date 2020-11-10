import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  const descriptionRef = useRef(null);
  const secondsRef = useRef(null);
  const minsRef = useRef(null);

  const onAddTask = (evt) => {
    const getTimerCount = () => {
      const minutes = Number(minsRef.current.value);
      const seconds = Number(secondsRef.current.value);
      return minutes*60 + seconds;
    };

    if (evt.key === 'Enter') {
      if (descriptionRef.current.value.length === 0) {
        return null;
      }

      addTask(descriptionRef.current.value, getTimerCount());
      descriptionRef.current.value = ``;
      secondsRef.current.value = ``;
      minsRef.current.value = ``;
    }
    return descriptionRef.current.value;
  };

  return (
    <form className="new-todo-form">
      <input
        className="new-todo"
        placeholder="Task"
        ref={descriptionRef}
        onKeyDown={onAddTask}
      />
      <input type="number" className="new-todo-form__timer" ref={minsRef} placeholder="Min" onKeyDown={onAddTask}/>
      <input type="number" className="new-todo-form__timer" ref={secondsRef} placeholder="Sec" onKeyDown={onAddTask}/>
    </form>
  )
}

// export default class NewTaskForm extends Component {
//   constructor() {
//     super();
//     this.minsRef = createRef();
//     this.secondsRef = createRef();
//     this.descriptionRef = createRef();
//   }

//   onAddTask = (evt) => {
//     const { addTask } = this.props;

//     const descriptionRef = this.descriptionRef.current;
//     const secondsRef = this.secondsRef.current;
//     const minsRef = this.minsRef.current;

//     const getTimerCount = () => {
//       const minutes = Number(minsRef.value);
//       const seconds = Number(secondsRef.value);
//       return minutes*60 + seconds;
//     };

//     if (evt.key === 'Enter') {
//       if (descriptionRef.value.length === 0) {
//         return null;
//       }

//       addTask(descriptionRef.value, getTimerCount());
//       descriptionRef.value = ``;
//       secondsRef.value = ``;
//       minsRef.value = ``;
//     }
//     return descriptionRef.value;
//   };

//   render() {
//     return (
//       <form className="new-todo-form">
//         <input
//           className="new-todo"
//           placeholder="Task"
//           ref={this.descriptionRef}
//           onKeyDown={this.onAddTask}
//         />
//         <input type="number" className="new-todo-form__timer" ref={this.minsRef} placeholder="Min" onKeyDown={this.onAddTask}/>
//         <input type="number" className="new-todo-form__timer" ref={this.secondsRef} placeholder="Sec" onKeyDown={this.onAddTask}/>
//       </form>
//     );
//   }
// }

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
