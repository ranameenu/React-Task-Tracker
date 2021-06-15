import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import Header from './Header';
import Tasks from './Tasks';
import axios from 'axios';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  // Fetch Data
  const getTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    const tasks = await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await axios.post(`http://localhost:5000/tasks`, task);
    console.log(res.data);
    setTasks([...tasks, res.data]);
  };

  return (
    <div className="container w-50 vh-70 shadow-sm p-3 my-5 bg-body border border-primary">
      <div className="row ">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
        <hr />
        {showAddTask && <AddTask addTask={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            deleteTask={deleteTask}
            toggleReminder={toggleReminder}
          />
        ) : (
          <p className=" mx-5 mt-5"> No task found</p>
        )}
      </div>
    </div>
  );
}

export default App;
