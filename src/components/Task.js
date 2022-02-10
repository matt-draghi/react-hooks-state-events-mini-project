import React from "react";

function Task({task, handleRemoveTask}) {
  //const {text, category} = task

  const removeTask = () => {
    console.log(task.text)
    handleRemoveTask(task.text)
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={removeTask} className="delete">X</button>
    </div>
  );
}

export default Task;
