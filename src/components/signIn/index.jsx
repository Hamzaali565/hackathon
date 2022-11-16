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
        <div className='main2'>
            <h1 className='heading1'> Login </h1>
            <form onSubmit={formSubmit}>

                <div className='email'>
                    <span className='label'>E-mail</span>
                    <span className='iput'><input type="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        name="email" id="" 
                        placeholder='admin@gmail.com'
                        /></span></div>

                <div  className='email1'>
                    <span className='label1'>Password</span>
                    <span className='iput1'><input type="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        name="current-password" id="" 
                        placeholder='admin1'/></span></div>
                <div className='log'>
                    <button type='submit'>Login</button>
                </div>

                                  
            
            </form>
        </div>





    )

}
export default Signin;