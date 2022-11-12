import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Attendence from './components/attendence';
import { useState } from 'react';
import Signin from './components/signIn'
import Signup from './components/signup'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';

function App() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("")

  // useEffect(() => {

  //   const auth = getAuth();
  //   // setUsername(auth.currentUser.displayName);
  //   let unSubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setLogin(true)
  //     } else {
  //       setLogin(false)
  //     }
  //   });
  //   return () => {
  //     unSubscribe();
  //   }
  // }, [])
  // const logoutHandler = () => {
  //   const auth = getAuth();
  //   signOut(auth).then(() => {
  //     // Sign-out successful.
  //   }).catch((error) => {
  //     // An error happened.
  //   });

  // }
  const loginHandler = () => {

  };

  return (
    <div>



      <div className='bond'>
        <div>
            <div>
              <ul className='nav'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/attendence'>Attendence</Link></li>
                <li><Link to='/signin'>LogOut</Link></li>
              </ul>
            </div>
            
          
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='attendence' element={<Attendence />} />
          <Route path='signin' element={<Signin />} />
          <Route path='*' element={<Navigate to="/" replace={true} />} />
        </Routes>
        

      
        <Routes>
          

        </Routes>


      </div>
</div>
      );
}

      export default App;
