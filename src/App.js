import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import React from 'react';
function App() {
  return (
      <div className="App">
      <h1>CS 230L</h1>
      <h2>Section - 001</h2> 
      <p>WVU ID: 800393605</p> 
      <p>Hi I am Nick</p> 
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
