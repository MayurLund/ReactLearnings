//1.Import both the libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

//get a reference to the div with ID root
const el = document.getElementById('root');

//Tell react to take control of that element
const root = ReactDOM.createRoot(el);

//Create a component


root.render(<App />);