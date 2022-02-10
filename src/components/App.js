import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState([...TASKS])
  //use state for categories?
  const [selectedCategory, setSelectedCatagory] = useState("All")

  const handleRemoveTask = (text) => {
    const remainingTasks = tasks.filter((task) => task.text !== text)
    setTasks(remainingTasks)
  }

  const displayTasks = tasks.filter((task) => {
    if(selectedCategory === "All"){
      return true
    }
    else if(task.category === selectedCategory){
      return true
    }
    else{
      return false
    }
  })
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCatagory}/>
      <NewTaskForm />
      <TaskList tasks={displayTasks} handleRemoveTask={handleRemoveTask}/>
    </div>
  );
}

export default App;
