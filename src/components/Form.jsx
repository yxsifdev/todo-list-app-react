import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;
    createTodo(value);
    setValue("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-5"
    >
      <input
        type="text"
        className="bg-white/10 border border-white/20 p-3 w-full sm:w-[300px] rounded placeholder:text-white/50 focus:outline-none"
        placeholder="¿Qué tarea pendiente tienes hoy?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="bg-blue-500 p-3 rounded font-medium w-full sm:w-auto text-white hover:bg-blue-600 transition-colors"
      >
        Agregar tarea
      </button>
    </form>
  );
};

export default Form;
