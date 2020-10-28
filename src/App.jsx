import NewTaskForm from './components/NewTaskForm/new-task-form.jsx';
import TaskList from './components/TaskList/task-list.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm/>
      </header>
      <section className="main">
        <TaskList/>
        <Footer/>
      </section>
    </section>
  );
}

export default App;
