import { useState } from 'react';

const SignIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return(
        <div className="my-2 mx-auto w-50 text-start">
            <h1>{isSignIn ? "Sign In" : "Create Account"}</h1>
            <form>
                <label for="employeeId" >Employee ID</label>
                <input type='text' id='employeeId' className='form-control'/>
                <label for="employeePw">Password</label>
                <input type='password' id='employeePw' className='form-control' />
                {!isSignIn ? 
                    <>
                        <label for='confirmPw'>Confirm Password</label>
                        <input type="password" id='confirmPw' className='form-control'/>
                    </> : <></>
                    }
            </form> 
        </div>
    );
}

export default SignIn;