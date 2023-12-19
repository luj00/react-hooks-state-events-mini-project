import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[1]);

  const handleTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text: taskText, category: selectedCategory });

    setTaskText("");
    setSelectedCategory(categories[1]);
  };

  return (
    <form
      className="new-task-form"
      onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleTextChange}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}>
          {categories.slice(1).map((category) => (
            <option
              key={category}
              value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input
        type="submit"
        value="Add task"
      />
    </form>
  );
}

export default NewTaskForm;