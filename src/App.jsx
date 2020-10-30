import {Component} from 'react';
import NewTaskForm from './components/NewTaskForm/new-task-form.jsx';
import TaskList from './components/TaskList/task-list.jsx';
import Footer from './components/Footer/footer.jsx';
import {FiltersList} from './components/TasksFilter/tasks-filter.jsx';

const getFilteredTasks = (tasks, filter) => {
  switch (filter) {
    case FiltersList.Active:
      return tasks.filter(task => task.isDone === false)
    case FiltersList.Completed:
      return tasks.filter(task => task.isDone === true)
    case FiltersList.All:
      return tasks
    default:
      return null;
    }
};

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      {description: "Completed task", isDone: true, id: 1},
      {description: "Editing task", isDone: false, id: 2},
      {description: "Active task", isDone: false, id: 3}
    ],
    filterTasks: FiltersList.All
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const taskIndex = todoData.findIndex((task) => task.id === id);

      const newTodoData = [
        ...todoData.slice(0, taskIndex),
        ...todoData.slice(taskIndex + 1)
      ];

      return {
        todoData: newTodoData
      };
    });
  }

  addTask = (description) => {
    const newTask = {
      description: description,
      isDone: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newTodoData = [
        ...todoData,
        newTask
      ];

      return {
        todoData: newTodoData
      };
    });
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((task) => task.isDone !== true);

      return {
        todoData: newTodoData
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const taskIndex = todoData.findIndex((task) => task.id === id);

      const oldTask = todoData[taskIndex];
      const newItem = {...oldTask, isDone: !oldTask.isDone};

      const newTodoData = [
        ...todoData.slice(0, taskIndex),
        newItem,
        ...todoData.slice(taskIndex + 1)
      ];

      return {
        todoData: newTodoData
      }
    })
  }

  setFilterTasks = (evt) => {
    this.setState({
      filterTasks: evt.target.innerText
    })
  }

  render() {
    const {todoData, filterTasks} = this.state;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask}/>
        </header>
        <section className="main">
          <TaskList todoData={getFilteredTasks(todoData, filterTasks)} deleteTask={this.deleteTask} onToggleDone={this.onToggleDone}/>
          <Footer setFilterTasks={this.setFilterTasks} filterTasks={filterTasks} clearCompleted={this.clearCompleted}/>
        </section>
      </section>
    );
  }
};
