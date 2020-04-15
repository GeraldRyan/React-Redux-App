import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Components/Joke';
import Request from './Components/Request';




function App()
{
  return (
    <div className="App">
      <h1>Hello Joker</h1>
      <Request></Request>
      <Joke></Joke>
    </div>
  );
}

export default App;
