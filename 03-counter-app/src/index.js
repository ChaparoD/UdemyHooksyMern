import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';


const divRoot = document.querySelector('#app')
console.log(divRoot)

ReactDOM.render(<PrimeraApp />, divRoot);
