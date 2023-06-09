import { useEffect, useState } from 'react';
import './Template.scss';
import { useNavigate } from 'react-router-dom';


const Template = ({ children }) => {
  const navigate = useNavigate();

  const [login, Islogin] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("user")) Islogin(true);
    else Islogin(false)
  }, [])

  const onClickLoginBtn = (e)=>{
    if(e.target.textContent === "로그아웃"){
      localStorage.clear();
      Islogin(false)
      navigate("/");
    } else if(e.target.textContent === "로그인"){
      navigate("/login");
    }
  }


  return (
    <div className="Template">
      <div className="mainHeader">
        <img
          src={process.env.PUBLIC_URL + '/images/home.png'}
          alt=""
          id="home"
          onClick={() => navigate('/')}
        />
        <div className="mainlogo">
          <img
            src={process.env.PUBLIC_URL + '/images/heart.png'}
            alt=""
            id="heart"
          />
          <span>서로이웃</span>
        </div>
        <button id="headerBtn" onClick={onClickLoginBtn}>{login ? '로그아웃' : '로그인'}</button>
      </div>
      {children}
    </div>
  );
};

export default Template;