import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*class App extends Component {
/!*  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*!/
}*/
class Shoppingelements extends React.Component{
   /* constructor(props) {
        super(props);
    }*/
    showmore : function () {
            document.getElementsByClassName("hidden").addClass("visible");
    }
    render(){
        return(
            <div className="shoppingList">
                <ul>
                    <li onClick={showmore}>{this.props.name}</li>
                    <li className='hidden'>{this.props.price}</li>
                    <li className='hidden'>{this.props.quantity}</li>
                </ul>
            </div>
        );
    }
}
export default Shoppingelements;
