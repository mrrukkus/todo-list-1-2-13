import {Component} from 'react';
import NewTaskForm from './components/NewTaskForm/new-task-form.jsx';
import TaskList from './components/TaskList/task-list.jsx';
import Footer from './components/Footer/footer.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoData: [
        {description: "Completed task", isDone: true, id: 1},
        {description: "Editing task", isDone: false, id: 2},
        {description: "Active task", isDone: false, id: 3}
      ],
    }
  }

  render() {
    const {todoData} = this.state;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm/>
        </header>
        <section className="main">
          <TaskList todoData={todoData}/>
          <Footer/>
        </section>
      </section>
    );
  }
};
