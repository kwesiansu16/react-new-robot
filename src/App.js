import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component() {
  constructor() {
    super();
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       Hello My name is Sandy
        </p>
    <button>Change Name</button>
      </header>
    </div>
  );
}
 
}

export default App;
