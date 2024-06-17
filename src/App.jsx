import './App.css';
import { useState } from 'react';

/*
function App() {
    //Aquí tu código
    const [name, newName] = useState('Sofía');
    const nombres = ["Data", "Reyes", "Yolanda"];

    const setName = (newVal) => {
        newName(newVal);
    }

    return (
        <div>
            <h2>Profesor: {name}</h2>
            <ul>{nombres.map(name =><li key={name} onClick={() => {setName(name)}}>{name}</li>)}</ul>
        </div>
    );
}
*/

function App () {
    const [name, newName] = useState('Sofía');

    const changeName = (e) => {     
        e.preventDefault();

        const inputName = e.target[0].value;

        if(inputName === undefined || inputName === null || inputName.length === 0) {
            e.target[0].placeholder = 'Campo vacio';
        } else {
            newName(e.target[0].value);
            e.target[0].value = '';
        }
    }

    return (
        <div>
            <h2>Profesor: {name}</h2>
            <form onSubmit={(e) => changeName(e)}>
                <input type='text' onChange={e => newName(e.target.value)}  placeholder='add a name'></input>
                <button type='submit' >Add</button>
            </form>
        </div>
    );
}

export default App
