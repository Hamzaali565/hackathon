import { useState } from 'react';
import './index.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Signup from '../signup';
import { Placeholder } from 'react-bootstrap';

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [changer, setChanger] = useState(true)
    const formSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("SignIn",userCredential);
            })
            .catch((error) => {
                console.log("ERROR", error);
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });

    }


    return (
        <div>
            <h1>This is Login page</h1>
            <form onSubmit={formSubmit}>

                <div>
                    <span>E-mail</span>
                    <span><input type="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        name="email" id="" 
                        placeholder='admin@gmail.com'
                        /></span></div>

                <div>
                    <span>Password</span>
                    <span><input type="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        name="current-password" id="" 
                        placeholder='admin1'/></span></div>
                <div>
                    <button type='submit'>Login</button>
                </div>

                                  
            
            </form>
        </div>





    )

}
export default Signin;