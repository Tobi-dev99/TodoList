import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import TodoForm from "./Components/TodoForm/TodoForm";
import Nav from "./Components/Nav/Nav";

function App() {
  const [todoList, setTodoList] = useState([
    { text: "Here's a task", isDone: false },
  ]);
  const [activeTab, setActiveTab] = useState("Active");
  let filteredList;

  const addTask = (text) => {
    const newList = [...todoList, { text, isDone: false }];
    setTodoList(newList);
  };

  const markTask = (index, toggle) => {
    const tempList = [...todoList];
    tempList[index].isDone = toggle;
    setTodoList(tempList);
  };

  const removeTodo = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  if (activeTab === "Active") {
    filteredList = todoList.filter((list) => list.isDone === false);
  } else if (activeTab === "Completed") {
    filteredList = todoList.filter((list) => list.isDone === true);
  } else {
    filteredList = [...todoList];
  }

  return (
    <div className="App">
      <h1 className="main-heading">Todo List App</h1>
      <TodoForm addTask={addTask} />
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        <TodoList
          tasks={filteredList}
          taskComplete={markTask}
          removeTodo={removeTodo}
          realList={todoList}
        />
      </div>
    </div>
  );
}

export default App;
