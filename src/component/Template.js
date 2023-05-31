import { useState } from 'react';
import './Template.scss';
import { useNavigate } from "react-router-dom";

const urlLink = {
  false: '/login',
  true: '/',
};

const Template = ({ children }) => {
  const navigate = useNavigate();

  const[login, Islogin] = useState(false);



  return (
    <div className="Template">
      <div className="header" >
        <img src={process.env.PUBLIC_URL+'/images/home.png'} alt="" id="home"onClick={() => navigate('/')}/>
        <div className="logo">
          <img src={process.env.PUBLIC_URL+'/images/heart.png'} alt="" id="heart" />
          <span>서로이웃</span>
        </div>
        <button id="headerBtn" onClick={() => navigate(urlLink[login])}>{login ? "로그아웃" : "로그인"}</button> 
      </div>
      {children}
    </div>
  );
};

export default Template;
