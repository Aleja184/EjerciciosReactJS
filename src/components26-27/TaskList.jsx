import React,{useContext, useState} from 'react';
import Task from './Task';
import { FilterContex, TasksContext } from './TaskContext';
import { SHOW_ALL, TASK_COMPLETED, TASK_PENDING } from './TasksFilter';

const TaskList = () => {
    const tasks = useContext(FilterContex)
    const task2 = useContext(TasksContext)
    console.log(tasks)
    return (       
            <ul>       
                    {tasks.task.map(task=>(
                    <li key={task.id}>
                        <Task task={task}></Task>
                    </li>
                ))}
            </ul>      
    );
}



export default TaskList;
