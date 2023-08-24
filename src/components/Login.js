import { useState } from "react"
import React from 'react'
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const loginAttempt = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setIsLoggedIn(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });

    }

    return (
        <div>
            <h1>Login Form</h1>
            {isLoggedIn?<h3>Logged In</h3>:
            <>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <br />
                <button className="btn btn-primary" onClick={loginAttempt}>Submit</button>
            </>
            }
        </div>
    )
}
