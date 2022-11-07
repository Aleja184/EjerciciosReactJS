import React,{useState,useContext} from 'react';
import { FilterDispatchContext, TasksContext, TasksDispatchContext } from './TaskContext';
import { ADD_TASK } from './TaskContainer';
import { SHOW_ALL } from './TasksFilter';

let nextId = 1;
const AddTask = () => {
    const dispatch = useContext(TasksDispatchContext);
    const [text, setText] = useState('');
    return (
        <div>
            <input
                placeholder='Add Task'
                onChange={(e)=>setText(e.currentTarget.value)}
                value={text}
                >
            </input>
            <button onClick={()=>{
                dispatch({
                    type:ADD_TASK,
                    id:nextId++,
                    text:text
                })
                setText('')
            }}>Add Task</button>
        </div>
    );
}



export default AddTask;
