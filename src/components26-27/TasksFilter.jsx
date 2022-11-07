import React,{useContext} from 'react';
import { FilterDispatchContext, TasksContext } from './TaskContext';

export const SHOW_ALL = 'SHOW_ALL';
export const TASK_COMPLETED = 'TASK_COMPLETED';
export const TASK_PENDING = 'TASK_PENDING';

const TasksFilter = () => {
    const dispatch = useContext(FilterDispatchContext);
    const task = useContext(TasksContext)
    return (
        <div>
            <button onClick={()=>dispatch({
                type: SHOW_ALL,
                task: task
            })}>SHOW ALL</button>
            <button onClick={()=>dispatch({
                type: TASK_COMPLETED,
                task: task
            })}>TASK_COMPLETED</button>
            <button onClick={()=>dispatch({
                type:TASK_PENDING,
                task: task
            })}>TASK_PENDING</button>
        </div>
    );
}

export default TasksFilter;
