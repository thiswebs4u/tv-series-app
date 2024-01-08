import React, { Component } from "react";
import './App.css';
import 'whatwg-fetch';
import Series from '../../containers/Series';
import Main from "../Main";

class  App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <h1>
         TV Series List
        </h1>
        </header>
    <Main />
    </div>
  );
}
}

export default App;