import React, { Component } from 'react';
import logo from './logo.svg';
import SignIn from './components/SingIn'
import SignUp from './components/SignUp'
import './App.css';

class App extends Component {

  state = {
    loggedIn: false
  }

  loggedIn = () =>{
    this.setState({loggedIn: true})
  }

  render() {

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {!this.state.loggedIn ? <SignIn loggedIn={this.loggedIn}/> : <h1>Welcome</h1>}
        <SignUp />
      </div>
    );
  }

}

export default App;
