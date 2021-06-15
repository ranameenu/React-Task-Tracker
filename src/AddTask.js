import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onAdd = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Enter your task first');
    }
    addTask({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form onSubmit={onAdd} className="">
      <h3>Add Task</h3>
      <div className="form-group add-form">
        <label>Task</label>
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label>Day & Time</label>
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Enter Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-group form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input rounded-0"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label className="form-check-label">Reminder</label>
      </div>

      <button
        type="submit"
        value="Save Task"
        className="btn btn-primary rounded-0 m-2 px-5 justify-content-center"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
