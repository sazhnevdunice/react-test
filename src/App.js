import React, { Component } from 'react';
import Form from './components/form/form';
import Result from './components/result-component/result';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {style: {}};
  }

  onChange = (val) => {
    this.setState({
      style: val
    })
  }
  
  render() {
    const self = this;
    console.log('render App')

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.style && this.state.style.width}
        </p>
        <Form
          onChange={this.onChange}
        />

        <Result
          myStyle={this.state.style}
        />
      </div>
    );
  }
}

export default App;
