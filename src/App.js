import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/Signin';
import ManageUsers from './components/ManageUsers';
import CreateShift from './components/CreateShift';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/signin' Component={SignIn} />
          <Route path='/manageusers' Component={ManageUsers} />
          <Route path='/createshift' Component={CreateShift} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
