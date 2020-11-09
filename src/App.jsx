import React, { Component } from 'react';
import NewTaskForm from './components/NewTaskForm/new-task-form';
import TaskList from './components/TaskList/task-list';
import Footer from './components/Footer/footer';
import { FiltersList } from './components/TasksFilter/tasks-filter';

const getFilteredTasks = (tasks, filter) => {
  switch (filter) {
    case FiltersList.Active:
      return tasks.filter((task) => task.isDone === false);
    case FiltersList.Completed:
      return tasks.filter((task) => task.isDone === true);
    case FiltersList.All:
      return tasks;
    default:
      return null;
  }
};

export default class App extends Component {
  state = {
    todoData: [
      { description: 'Completed task', isDone: true, creationDate: 'Mon Nov 02 2020 10:49:51 GMT+0500', timerCount: 3, id: 1 },
      { description: 'Editing task', isDone: false, creationDate: 'Mon Nov 02 2020 10:49:51 GMT+0500', timerCount: 3, id: 2 },
      { description: 'Active task', isDone: false, creationDate: 'Mon Nov 02 2020 10:49:51 GMT+0500', timerCount: 3, id: 3 },
    ],
    currentFilterTasksValue: FiltersList.All,
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const taskIndex = todoData.findIndex((task) => task.id === id);

      const newTodoData = [...todoData.slice(0, taskIndex), ...todoData.slice(taskIndex + 1)];

      return {
        todoData: newTodoData,
      };
    });
  };

  addTask = (description, timerCount) => {
    const newTask = {
      description,
      timerCount,
      isDone: false,
      id: Math.floor(Math.random() * 100),
      creationDate: new Date(),
    };

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newTask];

      return {
        todoData: newTodoData,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((task) => task.isDone !== true);

      return {
        todoData: newTodoData,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const taskIndex = todoData.findIndex((task) => task.id === id);

      const oldTask = todoData[taskIndex];
      const newItem = { ...oldTask, isDone: !oldTask.isDone };

      const newTodoData = [...todoData.slice(0, taskIndex), newItem, ...todoData.slice(taskIndex + 1)];

      return {
        todoData: newTodoData,
      };
    });
  };

  setFilterTasks = (evt) => {
    this.setState({
      currentFilterTasksValue: evt.target.innerText,
    });
  };

  render() {
    const { todoData, currentFilterTasksValue } = this.state;

    const activeTasksCount = todoData.filter((task) => task.isDone === false).length;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className="main">
          <TaskList
            todoData={getFilteredTasks(todoData, currentFilterTasksValue)}
            deleteTask={this.deleteTask}
            onToggleDone={this.onToggleDone}
          />
          <Footer
            setFilterTasks={this.setFilterTasks}
            currentFilterTasksValue={currentFilterTasksValue}
            clearCompleted={this.clearCompleted}
            activeTasksCount={activeTasksCount}
          />
        </section>
      </section>
    );
  }
}
