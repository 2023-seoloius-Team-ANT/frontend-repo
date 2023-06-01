import { Link } from '../../node_modules/react-router-dom/dist/index';
import Template from '../component/Template';
import { useLocation } from 'react-router-dom';
import './SignUp.scss';
import UserSelectBtn from '../component/common/button/UserSelectBtn';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const TOSIN_DATA = [
  { id: null, value: '통신사' },
  { id: '1', value: 'SKT' },
  { id: '2', value: 'KT' },
  { id: '3', value: 'U+' },
  { id: '4', value: '알뜰폰' },
];


const SeniorJoin = () => {
  
  const postCodeStyle = {
    width: '400px',
    height: '400px',
    display: modalState ? 'block' : 'none',
  }; // 스타일 정의 code
  
  const location = useLocation();
  let user = { ...location.state }.user
  let color = user==="senior" ? "pink":"green"

  const[gender, Isgender] = useState(true);
  const[modalState, setModalState] = useState(true);
  const[inputAddressValue, setInputAddressValue] = useState("");
  const[inputZipCodeValue, setInputZipCodeValue] = useState("");

  const genderChange = ()=>{
    Isgender(!gender);
  }
  
  const onCompletePost = data => {
    setModalState(false);
    setInputAddressValue(data.address);
    setInputZipCodeValue(data.zonecode);
  }; // onCompletePost 함수

  return(
    <Template>
      <div  id="title">회원가입</div>
      <div className={`${color} signupArea`} id="accountForm">
      <div className="inputTemplate">
            <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="" id="inputImg"/>
            <input 
                className='signUpInput'
                type="text"
                name="userid"
                // onChange={valueChange} 
                placeholder="아이디"
            />
      </div>
      <div className='hLine' id={color}/>
      <div className="inputTemplate">
            <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="" id="inputImg"/>
            <input 
                className='signUpInput'
                type="text"
                name="userpwd"
                // onChange={valueChange} 
                placeholder="비밀번호"
            />
      </div>
      <div className='hLine' id={color}/>
      <div className="inputTemplate">
            <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="" id="inputImg"/>
            <input 
                className='signUpInput'
                type="text"
                name="userpwdcheck"
                // onChange={valueChange} 
                placeholder="비밀번호 확인"
            />
      </div>
      </div> 

      {/* 인적사항 */}
      <div className={`${color} signupArea`} id="profileForm">

        <div className="inputTemplate">
              <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="" id="inputImg"/>
              <input 
                  className='signUpInput'
                  type="text"
                  name="userid"
                  // onChange={valueChange} 
                  placeholder="이름"
              />
        </div>
        <div className='hLine' id={color}/>
        <div className="inputTemplate">
              <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="" id="inputImg"/>
              <input 
                  className='signUpInput'
                  type="text"
                  name="userpwd"
                  // onChange={valueChange} 
                  placeholder="생년월일"
              />
        </div>
        <div className='hLine' id={color}/>
        <div className="inputTemplate">
              <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="" id="inputImg"/>
              <input 
                  className='signUpInput'
                  type="text"
                  name="userpwdcheck"
                  // onChange={valueChange} 
                  placeholder="전화번호"
              />
              <select className='userTelType'>
                {TOSIN_DATA.map(el => {
                  return <option key={el.id}>{el.value}</option>;
                  })}
              </select>
        </div>
         {/* 노인이면 보호자 번호 받기 */}
        {
        color === "pink" && (
          <>
          <div className='hLine' id={color}/>
          <div className="inputTemplate">
                <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="" id="inputImg"/>
                <input 
                    className='signUpInput'
                    type="text"
                    name="userpwdcheck"
                    // onChange={valueChange} 
                    placeholder="보호자 전화번호"
                />
                <select className='userTelType'>
                  {TOSIN_DATA.map(el => {
                    return <option key={el.id}>{el.value}</option>;
                    })}
                </select>
          </div>
          </>
        )
        }
        <div className='hLine' id={color}/>
        <div className='genderSelect'>
          <UserSelectBtn className="genderBtn" name="남자" type={gender} color="pink" onClick={genderChange}/>
          <UserSelectBtn className="genderBtn" name="여자" type={!gender} color="green" onClick={genderChange}/>
        </div>

      </div> 
      <div className={`${color} signupArea`} id="addressForm">
        <DaumPostcode
          style={postCodeStyle}
          onComplete={onCompletePost}
        ></DaumPostcode>
        
      </div> 
      {
        color === "pink" && (
          <div className={`${color} signupArea`} id="seniorForm">

          </div> 
        )
      }
      {
        color === "grean" && (
          <div className={`${color} signupArea`} id="caregiverForm"></div> 
        )
      }
    </Template>
    )
};

export default SeniorJoin;
