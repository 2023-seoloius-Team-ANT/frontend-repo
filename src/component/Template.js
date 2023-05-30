import './Template.css';
import HeaderBtn from './common/HearderBtn';

const Template = ({ children }) => {
  return (
    <div className="Template">
      <div className="header">
        <img src={'images/home.png'} alt="" id="home" />
        <div className="logo">
          <img src={'images/heart.png'} alt="" id="heart" />
          <span>서로이웃</span>
        </div>
        <HeaderBtn>로그인</HeaderBtn>
      </div>
      {children}
    </div>
  );
};

export default Template;
