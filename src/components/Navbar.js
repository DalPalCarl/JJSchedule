import { Link } from 'react-router-dom';
import './Components.css';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [tab, setTab] = useState("/");
    const { user, setUser } = UserAuth();

    const navigate = useNavigate();

    const handleSignOutButton = () => {
        setUser({});
        navigate("/JJSchedule");
    }

    return(
    <>
        <nav className="justify-content-center align-items-center flex flex-column md:flex-row d-flex font-serif-reg">
            <h1 className="fs-3 font-serif-bold">JJ Scheduler</h1>
            <ul className='mx-1'>
                <li className={tab === "/" ? "nav-link active" : "nav-link"}>
                    <Link className='link' to="/JJSchedule" onClick={() => {setTab("/")}}>Home</Link>
                </li>
                {Object.keys(user).length !== 0 ? 
                    user.manager ? 
                    <>
                        <li className={tab === "/manageusers" ? "nav-link active" : "nav-link"}>
                            <Link className='link' to="/JJSchedule/manageusers" onClick={() => {setTab("/manageusers")}}>Manage Users</Link>
                        </li> 
                        <li className={tab === "/createshift" ? "nav-link active" : "nav-link"}>
                            <Link className='link' to='/JJSchedule/createshift' onClick={() => {setTab("/createshift")}}>Create Shift</Link>
                        </li>
                        <button className='btn btn-secondary' onClick={() => {handleSignOutButton()}}>Sign Out</button>
                    </> : null :
                    <li className={tab === "/signin" ? "nav-link active" : "nav-link"}>
                        <Link className="link" to="/JJSchedule/signin" onClick={() => {setTab("/signin")}}>Sign In</Link>
                    </li>
                }
                
            </ul>
            
        </nav>
    </>
);}

export default Navbar;