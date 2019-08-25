import React from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';


const http = new HttpService();


//This is react-create-app version 3.0.0^
//We don't use classes anymore or constructor.
//But I ened to read more about states and constructors(super(props))
function App() {
 
   http.getProducts();
    
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This site has been Hacked!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
