import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            <h1>I am the chat page</h1>
          </Route>
          <Route path='/'>
            <h1>I am the home page</h1>
          </Route>
        </Switch>
        {/* Tinder cards */}
        {/* buttons below cards */}

        {/* chats screen */}
        {/* individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
