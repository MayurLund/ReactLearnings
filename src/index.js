//1.Import both the libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//get a reference to the div with ID root
const el = document.getElementById('root');

//Tell react to take control of that element
const root = ReactDOM.createRoot(el);

//Create a component
function App(){
    return (
        <h1>Hi There!</h1>
    )
}

root.render(<App />);