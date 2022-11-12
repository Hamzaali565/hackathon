import App from "../../App"
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import "./index.css"




const Signin = () => {
    const [pass] = useState("admin")
    const [password, setPassword] = useState("")
    const [check, setCheck] = useState(false)
    // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


    const loginForm = (e) => {
            e.preventDefault()
    }


    return (
        <div className="main3">
        <div className="main">
            <h1 className="head22">Signin Form</h1>
            <form onSubmit={loginForm}>
                <div className="inp1">
                    <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                    <Form.Control

                        type="name"
                        // onChange={(e) => { setName(e.target.value) }}
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
                <div className="inp1">
                    <Form.Label className="inp2" htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control

                        type="name"
                        placeholder="Password is admin"
                        onChange={(e) => { setPassword(e.target.value) }}
                        id="inputPassword5"
                        place
                        aria-describedby="passwordHelpBlock"
                    />

                </div>
                <div className="inp1"><button type="Submit">Sign In</button></div>
            </form>
            <p>Sign Inn Is Not Working kindly goto home from nav bar</p>



        </div>
        </div>


    )

}
export default Signin;