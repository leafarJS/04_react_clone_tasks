import React from "react";
import { useState } from "react";
import FormTask from "./Form";
import "./ListToDo.css";
import Task from "./Task";

const initialState = [];
const ListToDo = () => {
  const [tasks, setTasks] = useState(initialState);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const taskActually = [task, ...tasks];
      setTasks(taskActually);
    }
  };
  const deleteTask = (id) => {
    const taskActually = tasks.filter((task) => task.id !== id);
    setTasks(taskActually);
  };
  const completedTask = (id) => {
    const taskActually = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(taskActually);
  };
  return (
    // Fragment
    <>
      <FormTask onSubmit={addTask} />
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task
            text={task.text}
            filled={task.filled}
            key={task.id}
            id={task.id}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        ))}
      </div>
    </>
  );
};

export default ListToDo;
