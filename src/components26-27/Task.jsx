import React, {useState,useContext} from 'react';
import { TasksDispatchContext } from './TaskContext';
import { DELETE_TASK, EDIT_TASK } from './TaskContainer';

const Task = ({task}) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);

    return (
        <div>
            {isEditing ?  <div>
                <input
                    value={task.text}
                    type='text'
                    onChange={(e)=>dispatch({
                        type:EDIT_TASK,
                        task:{
                            ...task,
                            text: e.currentTarget.value
                        }
                    })}
                    >
                </input>
                <button onClick={()=>setIsEditing(false)}>Save</button>
            </div>  : <div>
                <p style={{textDecoration: task.completed ? 'line-through': 'none'}} onClick={
                    ()=>dispatch({
                type:EDIT_TASK,
                task:{
                    ...task,
                    completed:!task.completed
                }
            })
                }>{task.text}</p>
                <button onClick={()=>setIsEditing(true)}>Edit</button>
            </div> }
            <button onClick={()=> dispatch({
                type:DELETE_TASK,
                id:task.id
            })}>Delete</button>
        </div>
    );
}


export default Task;
