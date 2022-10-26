import React from 'react';
import { useState } from 'react';
import Input from './Input';

const TodoList = () => {

    const [taches, setTaches] = useState(['C#', 'Java', 'Python']);
    const [description, setDescription] = useState('');

    const remove = (position) => {
        
        const Ftaches = taches.filter((item, index) => index!==position);
        setTaches(Ftaches);
    }

    const add = () => {
        setTaches([...taches, description]);
    }

    return (
        <div>

            <Input description={description} handleChange={(e) => setDescription(e.target.value)} add={add} />
            <br/>
            {taches.map((item, index) => <div key={index} className='detail'> 
                <h2>{item}</h2>
                <button onClick={() => remove(index)}>Remove</button>
            </div>)}
            <button onClick={() => setTaches([])}>Clear All</button>
        </div>
    );
}

export default TodoList;
