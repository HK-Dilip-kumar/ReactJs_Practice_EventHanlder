import React, { Component } from 'react';
import Test from "./Test";
import Test1 from "./Test1";
import './App.css';

// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // state = {
  //   username: 'supermax'
  // }
  // usernameChangedHandler = (event) => {
  //   this.setState({ username: event.target.value });
  // }
  state = {
    username: "krishna"
  }
  switchHandler = (event) => {
    this.setState({ username: event.target.value })
  }
  render() {
    return (
      <div className="App">
        {/* <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" /> */}
        <h1>testing...</h1>
        <Test change={this.switchHandler} />
        <Test1 userName={this.state.username} curnValue={this.state.username} />
        <Test1 userName={this.state.username} />
        <Test1 userName="Radhe_Shyam" />
      </div>
    );
  }
}

export default App;
