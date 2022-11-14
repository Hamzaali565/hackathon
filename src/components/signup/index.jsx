import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")

    const formSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("user", userCredential);
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log("err", error);
            });



    }





    return (
        <div>
            <h1>This is Signup page</h1>
            <form onSubmit={formSubmit}>
                <div>
                    <span>Name</span>
                    <span><input type="text"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        name="name" id="" /></span>
                </div>

                <div>
                    <span>E-mail</span>
                    <span><input type="name"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        name="email" id="" /></span>
                </div>

                <div>
                    <span>Password</span>
                    <span><input type="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        name="password" id="" /></span>
                </div>

                <div>
                    <span>Confirm Password</span>
                    <input type="password" name="password" id="" /><span></span>
                </div>

                <div>
                    <span>City Name</span>
                    <input type="city"
                        onChange={(e) => {
                            setCity(e.target.value)
                        }}
                        name="city" id="" /><span></span>
                </div>
                <div>
                    <button type='submit'>Signup</button>
                </div>

            </form>
        </div>



    )

}
export default Signup;