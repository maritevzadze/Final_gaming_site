import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import GameList from './components/pages/GameList';
import GameDetail from './components/pages/GameDetail';
import './assets/styles/main.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/games" component={GameList} />
        <Route path="/game/:id" component={GameDetail} />
      </Switch>
    </Router>
  );
};

export default App;
