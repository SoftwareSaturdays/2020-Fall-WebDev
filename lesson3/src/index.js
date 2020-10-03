import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SoftwareSaturdays from './SoftwareSaturdays';

let name = "Hadi";

const someJSX = <div className="test">
  <h1>Hello!</h1><p>My name is {name}</p>
  <SoftwareSaturdays></SoftwareSaturdays>
</div>;

ReactDOM.render(someJSX , document.getElementById('root'));