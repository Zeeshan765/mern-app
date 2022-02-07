import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TopMenu from './components/TopMenu';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
      <Router>
        <TopMenu />
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
