import React, { useState } from 'react';
import TaskList from './components/TaskList';  
import TaskForm from './components/TaskForm'; 
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);  // Estado para el índice de la tarea a editar
  const [editText, setEditText] = useState('');  // Estado para el texto de la tarea a editar

  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  // Función para editar la tarea
  const editTask = (taskIndex) => {
    setEditIndex(taskIndex);
    setEditText(tasks[taskIndex].text);  // Establece el texto de la tarea a editar
  };

  // Función para actualizar la tarea
  const updateTask = (taskText) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === editIndex) {
        return { ...task, text: taskText };  // Actualiza el texto de la tarea
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditIndex(null);  // Resetea el índice de edición
    setEditText('');  // Limpia el texto de edición
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      {/* Renderiza el formulario para agregar o editar tareas */}
      <TaskForm 
        addTask={editIndex === null ? addTask : updateTask}  // Cambia la función según el estado
        taskText={editText}  // Pasa el texto de la tarea a editar
        setTaskText={setEditText}  // Permite modificar el texto en el formulario
      />
      
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
