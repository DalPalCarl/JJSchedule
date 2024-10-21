import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/Signin';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/signin' Component={SignIn} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
