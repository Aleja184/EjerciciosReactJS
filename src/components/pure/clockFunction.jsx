import React, {  useState, useEffect } from 'react'

export const ClockFunction = (props) => {
    const stateInitial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    }

    const [edad, setEdad] = useState(stateInitial.edad);
    const [fecha,setFecha] = useState(stateInitial.fecha);
    
    const tick = () =>  {
        setEdad(edad+1);
        setFecha(new Date());
    }
    
    useEffect(() => {
        const timerId = setInterval (
            () => tick(), 1000
         );
         return () => {
            clearInterval(timerId);
         }
    });
    return (
        <div>
            <h2>
            Hora Actual:
            {fecha.toLocaleTimeString()}
            </h2>
            <h3>{stateInitial.nombre} {stateInitial.apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    );

  
}