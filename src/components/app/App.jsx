import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MonsterDetails from '../../containers/MonsterDetails';
import MonsterPage from '../../containers/MonsterPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/monster/:name" exact component={MonsterDetails} />
        <Route path="/" component={MonsterPage}/>
      </Switch>
    </Router>  
  );
}
