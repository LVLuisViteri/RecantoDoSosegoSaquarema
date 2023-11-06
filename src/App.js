import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

