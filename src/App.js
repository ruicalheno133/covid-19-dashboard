import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        COVID-19 Portugal Data
      </header>
      <Dashboard />
      <footer className="App-footer">
          <p>Data from <a href="https://github.com/dssg-pt/covid19pt-data" target="_blank">
            dssg-pt/covid19pt-data
              </a>
          </p>
        </footer>
    </div>
  );
}

export default App;
