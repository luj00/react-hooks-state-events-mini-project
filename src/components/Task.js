import React from "react";

function Task(props) {
  const { id, category, text, onDelete } = props;

  const handleDeleteClick = () => {
    onDelete(id);
  };
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        className="delete"
        onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;