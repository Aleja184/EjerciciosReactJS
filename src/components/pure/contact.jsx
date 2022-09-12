import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h1>Nombre: {contact.name}</h1>
            <h2>Apellido: {contact.lastname}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>Contacto en : {contact.online ? 'En linea' : 'No disponible'}</h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact),
    name : PropTypes.string,

};


export default ContactComponent;
