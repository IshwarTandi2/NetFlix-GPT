import React from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO_URL, USER_LOGO_URL } from '../utils/constants'


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () =>{ signOut(auth).then(() => {
          // Sign-out successful.
       

        }).catch((error) => {
          // An error happened.
         
        })
      }

         useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in,  
  
    const {uid,email} = user;
     console.log(user);
    dispatch(addUser({uid:uid, email:email}));
   
     // navigate browse
     navigate("/browse");

    // ...
  } else {
    // User is signed out
    dispatch(removeUser());
    // navigate login
       // navigate browse
     navigate("/");

    // ...
  }
});
   return ()=> unsubscribe();
    },[])
  
  return (
    <div className="Header flex justify-between w-full absolute bg-gradient-to-b from-black z-10">
      <div>  <img className='ml-[200px]' width={280} src={LOGO_URL} alt='logo' ></img>
      </div>
      <div className='flex mr-20'>
        <img className=' w-12 h-12 my-9 mx-3 rounded-md ' src= {USER_LOGO_URL}></img>
        <button onClick={handleSignOut} className=' font-bold text-white text-lg'>(Sign Out)</button>
      </div>

    </div>
  )
}

export default Header