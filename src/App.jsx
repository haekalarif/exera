import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainDashboard from './components/MainDashboard';
import Login from './components/Login';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/index" component={MainDashboard} />
        </Switch>
      </BrowserRouter>
  )
}

export default App
