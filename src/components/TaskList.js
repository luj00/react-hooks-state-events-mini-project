import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, onDelete } = props;

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              id={task.id}
              category={task.category}
              text={task.text}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;