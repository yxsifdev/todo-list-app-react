import "./App.css";
import TodoList from "./components/TodoList";
import JavaScriptIcon from "./icons/JavaScript";
import ReactIcon from "./icons/React";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-4xl">TODO App con</h1>
        <span className="inline-flex items-center gap-5 mb-5">
          <ReactIcon /> <span className="font-bold text-4xl">&</span>{" "}
          <JavaScriptIcon />
        </span>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
