import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Task } from '../models/task.class';
import { LEVELS } from '../models/levels.enum';



const TaskFormy = () => {
    let user = new Task;

    const initialValues = {
        name : '',
        description: '',
        completed: false,
        level : 'Select a level',
    }

    const taskSchema = Yup.object().shape(
        {
            name : Yup.string()
                .min(10,'Name too short')
                .max(30,'Name too long')
                .required('Name is required'),
            description : Yup.string()
                .min(20, 'Description too short')
                .required('Description is required'),
            level : Yup.string().required('Level is required')
            }
    )
    return (
        <div>
            <h4>Task Form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={async (values) =>{
                    await new Promise((r) => setTimeout(r,2000));
                    alert(JSON.stringify(values,null,2));
                }
                }
            >

                {({values, errors, touched, isSubmitting, handleBlur, handleChange})=>(
                   <Form>
                        <label htmlFor='name'>Name</label>
                        <Field id='name' name='name' placeholder='Name of task' type='text'></Field>
                        {/* Errors name */}
                        {
                            errors.name && touched.name && (
                                <ErrorMessage name='name' component='div'></ErrorMessage>
                            )
                        }
                        <label htmlFor='description'>Description</label>
                        <Field id='description' name='description' placeholder='Description of task' as='textarea'></Field>
                        {/* Errors description */}
                        {
                            errors.description && touched.description && (
                                <ErrorMessage name='description' component='div'></ErrorMessage>
                            )
                        }
                        <label htmlFor='level'>Level</label>
                        <Field as="select" name="level">                      
                            <option value=''>Select a level</option>        
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                        </Field>
                        {/* Errors level */}
                        {
                            errors.level && touched.level && (
                                <ErrorMessage name='level' component='div'></ErrorMessage>
                            )
                        }
                        <button type='submit'>Create task</button>
                        {isSubmitting ? (<p>Creating new task</p>) : null}
                   </Form> 
                )}

            </Formik>
        </div>
    );
}

export default TaskFormy;
