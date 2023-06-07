import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
let Top = ()=>{
  const navigate = useNavigate();
  const location = useLocation();

  return(
    <div>
    <header className="header">
    <img className="logo" src="images/antlogo.png" alt=""/>
    {
      location.pathname === '/cal' ? (
        <button onClick={()=>{navigate('/')}}>
          <img src="images/home.png" alt=""/>
        </button>
      )
    : (
          <button onClick={()=>{navigate('/cal')}}>
            <img src="images/calender.png" alt=""/>
          </button>
      )
    }
  </header>
  </div>
  )
}
export default Top;