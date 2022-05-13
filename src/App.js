import './App.css';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import React, {Component} from "react";

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <NameForm />
      </header>
    </div>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault()
    this.setState(
      {
        [event.target.name]: event.target.value
      });
  }

  handleSubmit(event) {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="username"  value={this.state.username} onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App
