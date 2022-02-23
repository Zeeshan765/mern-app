import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home/Home';
import UserList from './pages/usersList/UserList';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Route path='/login' exact component={Login} />
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
