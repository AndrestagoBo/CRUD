import React from 'react';

function TaskForm({ addTask, taskText, setTaskText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} 
      />
      <button type="submit">{taskText ? 'Actualizar' : 'Agregar'}</button> {/* Cambia el texto del botón */}
    </form>
  );
}

export default TaskForm;

