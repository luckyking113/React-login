import React, { Component } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginInfo: true
    }
  }
  render() {
    return (
      <div>
        {this.state.loginInfo ? <Login />:<Home />}
      </div>      
    );
  }
}

export default App;
