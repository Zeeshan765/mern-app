import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TopMenu from './components/TopMenu';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home';
import Forget from './pages/Forget';
import Reset from './pages/Reset';

function App() {
  return (
    <>
      <Router>
        <TopMenu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/forgetpassword' exact component={Forget} />
          <Route path='/passwordreset' exact component={Reset} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
