import React, { useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
const initialState = "";

const FormTask = (props) => {
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleShipping = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false,
    };
    props.onSubmit(newTask);
  };
  return (
    <div>
      <form className="task-form" onSubmit={handleShipping}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="write a task"
          className="task-input"
          onChange={handleChange}
        />
        <button className="task-btn">add Task</button>
      </form>
    </div>
  );
};

export default FormTask;
