import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/home';
// import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Attendence from './components/attendence';
import { useState } from 'react';
import Signin from './components/signIn'
import Signup from './components/signup'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';
import Records from './components/records';

function App() {
  const [login, setLogin] = useState(true);
  const [username, setUsername]= useState("")
  useEffect(() => {

    const auth = getAuth();
    // setUsername(auth.currentUser.displayName);
    let unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true)
      } else {
        setLogin(false)
      }
    });
    return () => {
      unSubscribe();
    }
  }, [])



  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }
  const loginHandler = () => {

  };


  return (
    <div className='bond'>
      <div>
        {(login)
          ?
          <div>
            <ul className='nav'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/attendence">Attendence</Link></li>
              <li><Link to="/records">Records</Link></li>
              {/* <li><Link to="/profile">Profile</Link></li> */}
             
              <div className='bott1'><button onClick={logoutHandler}>
                <div className='tooltip'>
                  <img
                    className='img1'
                    src='https://www.iconpacks.net/icons/2/free-user-logout-icon-3056-thumb.png' />
                  <span class="tooltiptext">Logout</span>
                </div>
              </button>
              </div>
            </ul>
            <hr></hr>
          </div>
          :
          // <ul className='loginNav'>
          //     <li><Link to="/login">Login</Link></li>
          //     <li><Link to="/signup">Signup</Link></li>
          //     </ul>
          null
          }
      </div>
      {(login)
        ?
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='attendence' element={<Attendence />} />
          <Route path='records' element={<Records />} />
          {/* <Route path='profile' element={<Profile />} /> */}
          <Route path='*' element={<Navigate to="/" replace={true} />} />
        </Routes>
        :
        <Routes>
          <Route path='/login' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/' element={<Navigate to="/login" replace={true} />} />
        </Routes>

      }
    </div>
  );
}

export default App;