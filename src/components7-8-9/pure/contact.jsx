import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact,deleteContact,online}) => {

    /**
     * @Code for the Modal
     */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /**
     * @Function for the icon than depend of the status 
     */
    function iconStatus(){
        if(contact.online){
            return(<i className='bi-circle-fill' style={{color:'green'}}></i>)
        }else{
            return(<i  className='bi-circle-fill' style={{color:'tomato'}}></i>)
        }
    }

    return (

            <tr className='fw-normal'>
                <td className='align-middle'>{contact.name}</td>
                <td className='align-middle'>
                    <Button variant="light" onClick={handleShow}>
                        Show Contact
                    </Button></td>
                <td className='align-middle pointer' onClick={()=>{online(contact)}}>
                {iconStatus()}
                {contact.online ? 'Online' : 'Offline'}</td>
                <td className='align-middle pointer' onClick={()=>{deleteContact(contact)}}>
                    <i className='bi-trash' style={{color:'tomato'}}></i>
                </td>


                {/* Modal */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <p>{contact.name} {contact.lastname}</p>
                      <p>{contact.email}</p>
                  </Modal.Body>
                </Modal>
               
            </tr>

            
        

        
       
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact).isRequired,

};


export default ContactComponent;