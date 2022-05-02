import './App.css';
import {Router} from '@reach/router';
import React from 'react';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';
import Searchbar from './components/Searchbar';



function App() {
  return (
    <div className="App">
      <Searchbar/>
      <Router>
        <People path="/people/:id/"/>
        <Planets path="/planets/:id/"/>
        <Error path="/error/"/>
      </Router>
    </div>
  );
}

export default App;
