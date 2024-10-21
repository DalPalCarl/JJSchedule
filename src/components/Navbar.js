import { Link } from 'react-router-dom';
import './Components.css';

const Navbar = () => {
    return(
    <>
        <nav className="navbar">
            
            <div className='container-fluid'>
                <h1 className="navbar-brand">JJ Scheduler</h1>
                <ul className='d-flex p-0 m-0'>
                    <li className='nav-link'>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className='nav-link p-0 m-0'>
                        <Link className="link" to="/signin">Sign In</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    </>
);}

export default Navbar;