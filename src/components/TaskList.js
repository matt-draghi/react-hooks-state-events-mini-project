import React from "react";
import Task from "./Task.js"

function TaskList({tasks, handleRemoveTask}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => {
        return <Task key={task.text} task={task} handleRemoveTask={handleRemoveTask}/>
      })}
    </div>
  );
}

export default TaskList;
