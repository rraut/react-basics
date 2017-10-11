import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Shoppingelements from './App'
import registerServiceWorker from './registerServiceWorker';
const element = <h1>Hello, world</h1>;
//ReactDOM.render(<span>Renuka</span>, document.getElementById('root'));

export default Shoppingelements;
ReactDOM.render(
    <div>
        <Shoppingelements name='Banana' price='forty' quantity='12'/>
        <Shoppingelements name='Apple' price='hundread' quantity='2'/>
    </div>,document.getElementById("root"));

registerServiceWorker();
