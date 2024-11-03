import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/Signin';
import CreateUser from './components/CreateUser';
import CreateShift from './components/CreateShift';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/signin' Component={SignIn} />
          <Route path='/createuser' Component={CreateUser} />
          <Route path='/createshift' Component={CreateShift} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
