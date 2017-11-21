import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Display from './App'
import registerServiceWorker from './registerServiceWorker';
const element = <h1>Hello, world</h1>;

ReactDOM.render(
    <div>
        <Display />
    </div>,document.getElementById("root"));

registerServiceWorker();
