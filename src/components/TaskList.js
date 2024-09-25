import React from 'react';
import Task from './Task'; 

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          editTask={editTask}  // Pasa la función editTask
        />
      ))}
    </ul>
  );
}

export default TaskList;

