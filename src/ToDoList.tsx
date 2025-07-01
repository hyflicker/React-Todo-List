import React, {useState} from 'react';

function TodoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
        const {value} = event.target;
        setNewTask(value);
    }

    function addNewTask(){
        if (newTask.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index: number){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index:number){
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index:number){
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
    <div className= "TodoList">

        <h1>ToDoList</h1>

        <div>
            <input
            type="text"
            placeholder= "Enter task..."
            value={newTask}
            onChange={handleInputChange}/>
            <button
                className={"addTaskButton"}
                onClick={addNewTask}>
                Add Task
            </button>
        </div>
        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="moveTaskButton" onClick={() =>moveTaskUp(index)}>
                        ↑
                    </button>
                    <button className="moveTaskButton" onClick={() =>moveTaskDown(index)}>
                        ↓
                    </button>
                    <button className="deleteTaskButton" onClick={() =>deleteTask(index)}>
                        X
                    </button>

                </li>
            ))}
        </ol>
    </div>)
}
export default TodoList;