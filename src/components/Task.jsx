import React, { useState } from "react";
import { BsTrash3, BsPencilSquare } from "react-icons/bs";

const Todo = ({ task, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.task);

  const handleUpdate = () => {
    updateTodo(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-white/10 py-3 px-4 rounded-md shadow-md mb-2">
      {isEditing ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          className="text-white/80 font-medium flex-1 bg-transparent border-b border-white/20"
        />
      ) : (
        <p className="text-white/80 font-medium flex-1">{task.task}</p>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            className="text-white/80 hover:text-green-400 transition-colors"
            onClick={handleUpdate}
          >
            Guardar
          </button>
        ) : (
          <>
            <button
              className="text-white/80 hover:text-yellow-400 transition-colors"
              onClick={() => setIsEditing(true)}
            >
              <BsPencilSquare size={20} />
            </button>
            <button
              className="text-white/80 hover:text-red-400 transition-colors"
              onClick={deleteTodo}
            >
              <BsTrash3 size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
