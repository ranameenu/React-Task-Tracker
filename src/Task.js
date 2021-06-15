import React from 'react';

const Task = ({ task, deleteTask, toggleReminder }) => {
  return (
    <div
      className={`card bg-light px-2 mt-2 rounded-0  ${
        task.reminder ? 'reminder' : ''
      }`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <div className=" pt-2">
        <h5 className="float-start">{task.text}</h5>

        <button
          onClick={() => deleteTask(task.id)}
          type="button"
          className="btn btn-danger btn-sm float-end   "
        >
          Delete<i className="bi bi-x"></i>
        </button>
      </div>
      <div>
        <p>
          <strong> {task.day} </strong>
        </p>
      </div>
    </div>
  );
};

export default Task;
