import React from 'react';
import './App.css';

function App() {

    const names = ['victor', 'pavel', 'lena', 'vitalik']
    const users = [{name: 'victor'}, {name: 'pavel'}, {name: 'lena'}, {name: 'vitalik'}]
    const liElement = users.map((u, i) => <li key={i + 1}>{i + 1} {u.name}</li>)

    return (
        <div className={'App'}>
            <ul>
                {liElement}
            </ul>
        </div>
    )
        ;
}

export default App;
