import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input type="text" placeholder='Donner une description ..' value={props.description} onChange={props.handleChange} />
            <button onClick={props.add}>Ajouter</button>
        </div>
    );
}

export default Input;
