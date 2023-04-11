import React, { useState,useEffect } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = event.target.task.value;
    setTasks([...tasks, { text: newTask }]);
    event.target.reset();
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index, newTask) => {
    const newTasks = [...tasks];
    newTasks[index].text = newTask;
    setTasks(newTasks);
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Add task" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
            <button
              onClick={() =>
                handleEditTask(
                  index,
                  prompt("Enter the new task text:", task.text)
                )
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
