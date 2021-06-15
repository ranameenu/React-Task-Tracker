import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
  return (
    <>
      <h4 className="mt-5">Tasks</h4>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
