import React, { useState } from 'react'

function ToDO() {

    const [task, setTask] = useState([])

    const handleAddClick = (event) => {
        event.preventDefault();
        const NewTask = event.target.task.value;
        setTask([...task, { text: NewTask, Completed: false }]);
        localStorage.setItem('tasks', JSON.stringify(NewTask));
        event.target.reset();
    }

    const handleDeleteTask = (index) => {
        const newTasks = [...task];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };
    const handleEditTask = (index, newTask) => {
        const newTasks = [...task];
        newTasks[index].text = newTask;
        setTask(newTasks);
    };

    const handleToggleComplete = (index) => {
        const newTasks = [...task];
        newTasks[index].completed = !newTasks[index].completed;
        setTask(newTasks);
    };

    return (
        <>
            <form onSubmit={handleAddClick}>
                <input type="text" name='task' placeholder='Enter Something..' />
                <button>Add</button>
            </form>
            <ul>
                {task.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleComplete(task)}
                        />
                        {task.text}
                        <button onClick={() => handleDeleteTask(task)}>Delete</button>
                        <button
                            onClick={() =>
                                handleEditTask(
                                    task,
                                    prompt("Enter the new task text:", task.text)
                                )
                            }
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ToDO;