import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route, Routes, Link, Navigate} from 'react-router-dom';
import Attendence from './components/attendence';
function App() {
  return (
   <div>
<ul>
<li><Link to='/'>Home</Link></li>
<li><Link to='/attendence'>Attendence</Link></li>
</ul>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='attendence' element={<Attendence/>}/>
<Route path='*' element={<Navigate to="/" replace={true} />} />

</Routes>


   </div>

  );
}

export default App;
