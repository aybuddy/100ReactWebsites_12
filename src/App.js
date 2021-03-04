import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

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
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* buttons below cards */}

        {/* chats screen */}
        {/* individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
