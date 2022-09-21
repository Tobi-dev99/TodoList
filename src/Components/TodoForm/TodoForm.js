import {React, useState} from 'react';
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
    const [input, setInput] = useState("");
    const onChangeInput = (e) => {
      setInput(e.target.value);
    };

    const submitHandler = (e) => {
      e.preventDefault();
      props.addTask(input);
      setInput("");
    };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input placeholder='Add Task' onChange={onChangeInput} type="text" value={input} />
      <button className={classes.addButton} disabled={input.length === 0} >Add</button>
    </form>
  );
}

export default TodoForm