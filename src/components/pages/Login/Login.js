import React from 'react';
import logo from '../../../images/logos/Group 1329.png'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn=()=>{
        signInWithGoogle();
    }
    return (
        <div>
            <div className='flex justify-center mt-5'>
                <img width={200} src={logo} alt="" />
            </div>
            <div className='bg-white w-2/5 mx-auto mt-10 px-20 py-36 rounded border-4 border-gray-300'>
                <div className='text-center'>
                    <h2 className='text-center text-2xl font-bold mb-5'>Login with</h2>
                    <button onClick={handleGoogleSignIn} className='px-20 py-1 border rounded-full hover:bg-gray-300 transition flex justify-between items-center mx-auto gap-5'>
                        <FcGoogle className='ml-0'></FcGoogle>
                        continue with google
                    </button>
                    <p className='mt-3'>Don't have an account? <Link className='text-blue-400 underline' to='/register'>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;