import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home/Home';
import UserList from './pages/usersList/UserList';

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={UserList} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
