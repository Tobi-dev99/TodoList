import React from "react";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  // let myList;
  const checkedHandler = (e) => {
    if (e.target.checked) {
      props.taskComplete(e.target.id, true);
    } else {
      props.taskComplete(e.target.id, false);
    }
  };

  const removeTaskHandler = (e) => {
    props.removeTodo(e.target.id);
  };

  return (
    <ul className={classes.taskList}>
      {props.tasks.map((task) => {
        const id = props.tasks.findIndex((t) => t === task);
        const removeId = props.realList.findIndex((t) => t === task);
        return (
          <li className={classes.taskItem} key={id}>
            <input
              id={removeId}
              onChange={checkedHandler}
              type="checkbox"
              checked={task.isDone === true}
            />
            <div>{task.text}</div>
            <button onClick={removeTaskHandler} id={removeId}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
