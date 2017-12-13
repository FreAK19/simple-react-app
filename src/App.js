import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="container-app">
        <div className="FromBox">
          <Form action="send.php"/>
        </div>
      </div>
    );
  }
}

export default App;
