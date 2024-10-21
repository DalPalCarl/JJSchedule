import { Link } from 'react-router-dom';
import './Components.css';
import { useState } from 'react';

const Navbar = () => {
    const [tab, setTab] = useState("/");

    return(
    <>
        <nav className="navbar justify-content-evenly align-items-center">
            <h1 className="navbar-brand">JJ Scheduler</h1>
            <ul className=''>
                <li className={tab === "/" ? "nav-link active" : "nav-link"}>
                    <Link className='link' to="/" onClick={() => {setTab("/")}}>Home</Link>
                </li>
                <li className={tab === "/signin" ? "nav-link active" : "nav-link"}>
                    <Link className="link" to="/signin" onClick={() => {setTab("/signin")}}>Sign In</Link>
                </li>
            </ul>
            
        </nav>
    </>
);}

export default Navbar;