import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div className="Log in page" >
            <Header />
            <div className='absolute'>
                <img className="" src='https://assets.nflxext.com/ffe/siteui/vlv3/75772f65-58b5-465f-b642-fa858b6168ca/web/IN-en-20260302-TRIFECTA-perspective_26418256-c5f3-4e9a-8160-a6b534228a2f_large.jpg' alt='Background image'></img>
            </div>
                <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className='text-3xl font-bold'>Sign in</h1>
                    <input className="font-bold  text-lg p-4 my-4 w-full bg-gray-700" type='text' placeholder='Email or phone number'/>
                    <input className="font-bold  text-lg p-4 my-4 w-full bg-gray-700 " type='password' placeholder='Password'/>
                    <button className=" font-bold  text-lg bg-red-700 p-4 my-4 w-full cursor-pointer">Sign In</button>
                </form>
        </div>
    )
}

export default Login