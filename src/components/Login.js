import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    
    const [isSignInForm,setSignInForm] = useState(true);
    const toggleSiginForm = ()=>{
       setSignInForm(!isSignInForm);
    }
    return (
        <div className="Log in page" >
            <Header />
            <div className='absolute'>
                <img className="" src='https://assets.nflxext.com/ffe/siteui/vlv3/75772f65-58b5-465f-b642-fa858b6168ca/web/IN-en-20260302-TRIFECTA-perspective_26418256-c5f3-4e9a-8160-a6b534228a2f_large.jpg' alt='Background image'></img>
            </div>
                <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className='text-3xl font-bold'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
                 {!isSignInForm && <input className="font-bold  text-xl p-4 my-4 w-full bg-gray-700 " type='text' placeholder='Full Name'/>}
                    <input className="font-bold  text-xl p-4 my-4 w-full bg-gray-700" type='text' placeholder='Email or phone number'/>
                    <input className="font-bold  text-xl p-4 my-4 w-full bg-gray-700 " type='password' placeholder='Password'/>
                    <button className=" font-bold  text-xl bg-red-700 p-4 my-4 w-full cursor-pointer">{isSignInForm? "Sign In" : "Sign Up"}</button>
                    <p className='font-bold  text-xl cursor-pointer' onClick={toggleSiginForm} >{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
                </form>
        </div>
    )
}

export default Login