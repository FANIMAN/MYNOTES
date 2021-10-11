import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import Favorites from './components/notes/Favorites'
import EditForm from './components/notes/EditForm'
import './App.css';
import NoteDetail from './components/notes/NoteDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/editform/:id' component={EditForm} />
        <Route path='/note/:id' component={NoteDetail} />
      </Switch>
    </Router>
  );
}

export default App;
