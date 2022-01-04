import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import MainDashboard from './components/MainDashboard';
import Login from './components/Login';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route path="/Login" component={Login} />
          <Route path="/Index" component={MainDashboard} />
        </Switch>
      </BrowserRouter>
  )
}

export default App
