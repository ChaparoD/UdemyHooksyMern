import React from 'react';
//import ReactDOM from 'react-dom'; 
//Sacamos ReactDom.render(<fatherComponent>, divRoot)
import { createRoot } from 'react-dom/client';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import './index.css';


const divRoot = document.querySelector('#app')
const root = createRoot(divRoot);

//root.render(<PrimeraApp saludo = {"Lo Logramos"} />);

root.render(<CounterApp numero = {6} />);
