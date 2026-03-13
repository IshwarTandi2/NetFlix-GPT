
import Header from './Header'
import { useState, useRef } from 'react';
import checkValid from '../utils/checkValid';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { BACKGROUND_URL } from '../utils/constants';


const Login = () => {
   
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const toggleSiginForm = () => {
        setSignInForm(!isSignInForm);
    }

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    const isFormValid = () => {
        const message = checkValid(email.current.value, password.current.value);
        seterrorMessage(message);
        if (message) return;

        //sign up logic
        if (!isSignInForm) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                     

                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + " - " + errorMessage);
                    // ..
                });
        }
        else {
            // sign in logic
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                         

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                       seterrorMessage(errorCode + " - " + errorMessage);
                });
        }

    }
    return (
        <div className="Log-in-page" >
            <Header />
            <div className='absolute'>
                <img className="" src={BACKGROUND_URL} alt='Background image'></img>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className='text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={fullName} className="font-bold  text-xl p-4 my-4 w-full bg-gray-700 " type='text' placeholder='Full Name' />}
                <input ref={email} className="font-bold  text-xl p-4 my-4 w-full bg-gray-700" type='text' placeholder='Email ' />
                <input ref={password} className="font-bold  text-xl p-4 my-4 w-full bg-gray-700 " type='password' placeholder='Password' />
                <p className='font-bold text-red-500'  >{errorMessage}</p>
                <button onClick={isFormValid} className=" font-bold  text-xl bg-red-700 p-4 my-4 w-full cursor-pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='font-bold  text-xl cursor-pointer' onClick={toggleSiginForm} >{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login