import React ,{useRef} from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../../models/contact.class';
import '../../styles/contacts.scss';



const NewContact = ({add}) => {
    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');

     /**
     * 
     * @Function than allow read the inputs, and send this information to the proop add 
     */

    function addContact(event){
        event.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);

    }

    return (
        <form className='d-flex flex-column justify-content-center align-items-center'>
            <input type='text' ref={nameRef} placeholder='Name' autoFocus required className='margin form-control form-control-lg'></input>
            <input type='text' ref={lastnameRef} placeholder='Lastname' required className='margin form-control form-control-lg'></input>
            <input type='text' ref={emailRef} placeholder='Email' required className='margin form-control form-control-lg'></input>
            <button type='button' onClick={addContact} className='margin btn btn-success'>Add</button>
        </form>
    );
};


NewContact.propTypes = {
    add : PropTypes.func.isRequired,
};


export default NewContact;
