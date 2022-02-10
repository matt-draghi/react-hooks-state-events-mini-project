import React from "react";

function Task({task, handleRemoveTask}) {
  const {text, category} = task

  const removeTask = () => {
    console.log(text)
    handleRemoveTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={removeTask} className="delete">X</button>
    </div>
  );
}

export default Task;
