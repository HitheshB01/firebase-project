import React, { useState } from 'react' 
import { auth,googleProvider } from '../config/firebasepj'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const Auth = () => {
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const singin=async()=>{
     await createUserWithEmailAndPassword(auth,email,pass)
    }
    const googleSignIn=async()=>{
        await signInWithPopup(auth, googleProvider)
    }
    const logout=async()=>{
        await signOut(auth, googleProvider)
    }


    return (
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 m-2 border-gray-900 border-2"
            type="text"
            placeholder="email..."
          />
          <br />
          <input
            onChange={(e) => setPass(e.target.value)}
            className="p-1 m-2 border-gray-900 border-2"
            type="password"
            placeholder="pass..."
          />
          <br />
          <button onClick={singin} className="p-1 m-2 border-gray-900 border-2">
            sign in
          </button>
          <button onClick={googleSignIn}  className="p-1 m-2 border-gray-900 border-2">sign in with google</button>
          <button onClick={logout} className="p-1 m-2 border-gray-900 border-2">logout</button>
        </div>
      );
}

export default Auth
