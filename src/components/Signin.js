import { useState, useRef } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { user, handleSignInUser } = UserAuth();
    const [isSignIn, setIsSignIn] = useState(true);

    const userRef = useRef();
    const pwRef = useRef();

    const navigate = useNavigate();

    const submitSignIn = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // const load = Object.fromEntries(formData);


        const entryData = {
            userId: userRef.current.value,
            pw: pwRef.current.value
        }
        console.log(entryData);
        handleSignInUser(entryData);
        navigate("/");
    }

    const submitCreateUser = (e) => {
        e.preventDefault();

    }

    return(
        <div className="my-2 mx-auto w-50 text-start my-2">
            {isSignIn ? 
            <>
                <h1>Sign In</h1>
                <form onSubmit={submitSignIn} className='justify-content-start' style={{width: 300}}>
                    <label htmlFor="employeeId" className='my-2'>Employee ID</label>
                    <input type='text' id='employeeId' name='employeeId' ref={userRef} className='form-control'/>
                    <label htmlFor="employeePw" className='my-2'>Password</label>
                    <input type='password' id='employeePw' name='employeePw' ref={pwRef} className='form-control' />
                    <button type='submit' className='btn btn-primary my-2'>Sign In</button>
                    {/* <button className='btn btn-secondary my-2 mx-2' onClick={() => {setIsSignIn(!isSignIn)}}>Create User</button> */}
                </form> 
            </> :
            <>
                <h1>Create User</h1>
                <form onSubmit={() => submitCreateUser()} className='justify-content-start' style={{width: 300}}>
                    <label htmlFor="employeeId" className='my-2'>Employee ID</label>
                    <input type='text' id='employeeId' className='form-control' maxLength={4}/>
                    <label htmlFor="employeePw" className='my-2'>Password</label>
                    <input type='password' id='employeePw' className='form-control' />
                    <label htmlFor='confirmPw' className='my-2'>Confirm Password</label>
                    <input type="password" id='confirmPw' className='form-control'/>
                    <button type='submit' className='btn btn-primary my-2'>Create User</button>
                    <button className='btn btn-secondary m-2' onClick={() => {setIsSignIn(!isSignIn)}}>Sign In</button>
                </form>
            </>  
            }
            
        </div>
    );
}

export default SignIn;