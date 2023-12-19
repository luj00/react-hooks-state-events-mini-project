import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCategorySelect = (selectedCategory) => {
    if (selectedCategory === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter(
        (task) => task.category === selectedCategory
      );
      setTasks(filteredTasks);
    }
  };
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={handleCategorySelect}
      />

      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />

      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;