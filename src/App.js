import "./App.css";
import ListToDo from "./components/ListToDo";
import Logo from "./components/Logo";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="task-list-main">
        <h1>My Tasks</h1>
        <hr />
        <ListToDo />
      </div>
    </div>
  );
}
export default App;
