import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
let Top = ()=>{
  const navigate = useNavigate();
  const location = useLocation();

  return(
    <div>
    <header className="header">
    <img className="logo" src={process.env.PUBLIC_URL + "/images/antlogo.png"} alt=""/>
    {
      location.pathname === '/caregivermain/cal'? (
        <button onClick={()=>{navigate('/caregivermain')}}>
          <img src={process.env.PUBLIC_URL + "/images/house.png"} alt=""/>
        </button>
      )
    : (
          <button onClick={()=>{navigate('/caregivermain/cal')}}>
            <img src={process.env.PUBLIC_URL + "/images/calender.png"} alt=""/>
          </button>
      )
    }
  </header>
  </div>
  )
}
export default Top;