/* eslint-disable */
import './reset.css';
import './App.css';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import User from './pages/User.js'
import View from './pages/View.js'
import Cal from './pages/Cal.js'


function App() {
  return (
    <>
     
     <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/cal' element={<Cal/>}/>
    </Routes> 
    </>


  );
}



export default App;
