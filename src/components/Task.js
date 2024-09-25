import React from 'react';

function Task({ task, index, deleteTask, editTask }) {
  return (
    <li>
      {task.text}  {/* Muestra el texto de la tarea */}
      <button onClick={() => deleteTask(index)}>Eliminar</button>  {/* Botón para eliminar la tarea */}
      <button onClick={() => editTask(index)}>Editar</button>  {/* Botón para editar la tarea */}
    </li>
  );
}

export default Task;
