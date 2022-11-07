import { AcUnitTwoTone } from '@mui/icons-material';
import React,{useReducer} from 'react';
import AddTask from './AddTask';
import { FilterContex, FilterDispatchContext, TasksContext, TasksDispatchContext } from './TaskContext';
import TaskList from './TaskList';
import TasksFilter, { SHOW_ALL, TASK_COMPLETED, TASK_PENDING } from './TasksFilter';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const FILTER_TASK = 'FILTER_TASK';

const initialState = []

const taskReducer = (task,action) =>{
    switch (action.type) {
        case ADD_TASK:
            return [
                ...task,
                {
                id: action.id,
                text: action.text,
                completed: false
            }]
        case EDIT_TASK:
            return task.map(t=>{
                if(t.id === action.task.id){
                    return action.task;
                }else{
                    return t
                }
            })
            
        case DELETE_TASK:
            return task.filter(t=> t.id !== action.id)
        default:
            return task
    }
}

const initialStateFilter = {
    type:SHOW_ALL,
    task: []
}
const filterReducer = (state,action) =>{
    switch (action.type) {
        case SHOW_ALL:
            return {
                ...state,
                task : action.task
            }
        case TASK_COMPLETED:
            return{
                ...state,
                task: action.task.filter(task => task.completed === true)
            }
        case TASK_PENDING:
            return{
                ...state,
                task:action.task.filter(task => task.completed === false)
            }
        default:
            return state
    }
}
const TaskContainer = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const [filter, dispatchFilter] = useReducer(filterReducer, initialStateFilter)


    return (
        <TasksContext.Provider value={state}>
            <TasksDispatchContext.Provider value={dispatch}>  
                <FilterContex.Provider value={filter}>
                    <FilterDispatchContext.Provider value={dispatchFilter}>
                        <h1>Tasks List</h1>
                        <AddTask></AddTask>
                        <TaskList ></TaskList>
                        <TasksFilter></TasksFilter>
                    </FilterDispatchContext.Provider>
                </FilterContex.Provider>
            </TasksDispatchContext.Provider>  
        </TasksContext.Provider>
    );
}

export default TaskContainer;
