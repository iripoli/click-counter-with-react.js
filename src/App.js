import React from 'react';
import Contador from './components/views'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {


  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/:initialCount" exact component={Contador} />
        <Route path="/" exact component={Contador} />
      </Switch>
    </Router>
    </div>

    
  );
}

export default App;
