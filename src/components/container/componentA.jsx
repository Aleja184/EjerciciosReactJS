import React from 'react';
import PropTypes from 'prop-types';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';


const ComponentA = () => {
    const contact1 = new Contact('Alejandra','Toro','Torogrisalesa',true);
    return (
        <div>
            <ContactComponent contact={contact1}></ContactComponent>
        </div>
    );
};


ComponentA.propTypes = {

};


export default ComponentA;
