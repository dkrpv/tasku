import React from 'react';
import Main from './pages/main';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App">
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
    </div>
    </Router>
  );
}


export default App;
