// import React, { useRef } from 'react';
// import PropTypes from 'prop-types';

// const NewTaskForm = ({ addTask }) => {
//   const descriptionRef = useRef(null);
//   const secondsRef = useRef(null);
//   const minsRef = useRef(null);

//   const onAddTask = (evt) => {
//     const getTimerCount = () => {
//       const minutes = Number(minsRef.current.value);
//       const seconds = Number(secondsRef.current.value);
//       return minutes*60 + seconds;
//     };

//     if (evt.key === 'Enter') {
//       if (descriptionRef.current.value.length === 0) {
//         return null;
//       }

//       addTask(descriptionRef.current.value, getTimerCount());
//     }
//     return descriptionRef.current.value;
//   };

//   return (
//     <form className="new-todo-form">
//       <input
//         className="new-todo"
//         placeholder="Task"
//         ref={descriptionRef}
//         onKeyDown={onAddTask}
//         data-type="input"
//       />
//       <input type="number" className="new-todo-form__timer" data-type="min" ref={minsRef} placeholder="Min" onKeyDown={onAddTask}/>
//       <input type="number" className="new-todo-form__timer" data-type="sec" ref={secondsRef} placeholder="Sec" onKeyDown={onAddTask}/>
//     </form>
//   )
// }

// NewTaskForm.propTypes = {
//   addTask: PropTypes.func.isRequired,
// };

// export default NewTaskForm;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [secValue, setSecValue] = useState('');
  const [minValue, setMinValue] = useState('');

  const onInputChange = (evt) => {
    console.log(evt);
    if (evt.target.dataset.type === "input") {
      setInputValue(evt.target.value);
    }
    if (evt.target.dataset.type === "min") {
      setMinValue(evt.target.value);
    }
    if (evt.target.dataset.type === "sec") {
      setSecValue(evt.target.value);
    }
  };


  const onAddTask = (evt) => {
    const timerCount = Number(minValue)*60 + Number(secValue);

    if ( evt.key === 'Enter' ) {
      if (inputValue.length === 0) {
        return null;
      }

      addTask(inputValue, timerCount);
      setInputValue('');
      setSecValue('');
      setMinValue('');
    }
    return null;
  };

  return (
      <form className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          onKeyDown={onAddTask}
          data-type="input"
          value={inputValue}
          onChange={onInputChange}
        />
        <input type="number" className="new-todo-form__timer" data-type="min" placeholder="Min" value={minValue} onKeyDown={onAddTask} onChange={onInputChange}/>
        <input type="number" className="new-todo-form__timer" data-type="sec" placeholder="Sec" value={secValue} onKeyDown={onAddTask} onChange={onInputChange}/>
      </form>
    );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
