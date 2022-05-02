import React from "react";
import "./Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Task = ({ id, text, filled, completedTask, deleteTask }) => {
  return (
    <div className={filled ? "task-container filled" : "task-container "}>
      <div className="task-text" onClick={() => completedTask(id)}>
        {text}
      </div>
      <div onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
};

export default Task;
