import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formText, setFormText] = useState("")
  const [formCategory, setFormCategory] = useState("Code")

  const handleFormText = (e) => setFormText(e.target.value)
  const handleFormCategory = (e) => setFormCategory(e.target.value)//setFormCategory(e.target.value)

  const submitForm = (e) => {
    e.preventDefault()
    const formData = {
      text: formText,
      category: formCategory
    }
    onTaskFormSubmit(formData)
  }

  return (
    <form onSubmit={submitForm} className="new-task-form">
      <label>
        Details
        <input onChange={handleFormText} type="text" name="text" value={formText} />
      </label>
      <label>
        Category
        <select onChange={handleFormCategory} name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category)=>{
            if(category !== "All"){
              return(
                <option key={category} value={category}>{category}</option>
              )
            }
            else{
              return null
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
