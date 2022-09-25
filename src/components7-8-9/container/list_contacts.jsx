import React ,{useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import '../styles/contacts.scss';
import NewContact from '../pure/forms/newContact';



const ListContacts = () => {
    const contact1 = new Contact('Alejandra','Toro','Torogrisalesa@gmail.con',false);
    const contact2 = new Contact('Diego','Cardenas','Diego12@gmail.com',true);
    const contact3 = new Contact('Diana','Otalvaro','Diana12@gmail.com',false);

    const [contacts, setContacts] = useState([contact1,contact2,contact3]);

    /**
     * @Function for change the status of the user
     */
    function changeStatus(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].online = !tempContacts[index].online; 
        setContacts(tempContacts);
    }

    /**
     * 
     * @Function for delete some contact 
     */

    function deleteContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    /**
     * 
     * @Function for add contacts 
     */
    function addContact(contact){
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }
    return (
        <div >
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h1>Contacts</h1>
                    </div>
                    <div className='card-body' data-mbd-perfect-scrollbar='true' style={{position:'relative',height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Contact</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact,index)=>{
                                    return(
                                        <ContactComponent key={index} contact={contact} online={changeStatus}
                                            deleteContact={deleteContact}
                                        ></ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        <NewContact add={addContact}></NewContact>
        </div>
    );
};





export default ListContacts;
