import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Template from '../component/Template';
import SignBtn from '../component/common/button/SignBtn';
import UserSelectBtn from '../component/common/button/UserSelectBtn';
import './LoginPage.scss';
import axios from '../../node_modules/axios/index';

const urlLink = {
  findId: '/',
  findPwd: '/',
  signUp: '/signup',
};

const LoginPage = () => {
  //링크 이동
  const navigate = useNavigate();
  //로그인 정보 폼 저장
  const [form, setForm] = useState({
    id: '',
    pwd: '',
  });

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  //스타일 변경을 위한
  const [userType, IsUserType] = useState(true);

  const userTypeChange = (e) => {
    IsUserType(!userType);
  };

  const postForm = () => {
    axios.post('/api/v1/login', form, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log('성공');
      localStorage.setItem('user', response.data.result);
      if(userType){
        navigate("/");
      } else{
        navigate("/caregivermain");
      }
    });
  };
  //링크 이동 함수
  const goUrl = (e) => {
    navigate(`${urlLink[e.target.id]}`, {
      state: { user: `${userType ? 'senior' : 'caregiver'}` },
    });
  };

  return (
    <Template>
      <div id="UserSelectBtns">
        <UserSelectBtn
          name="고령자"
          color="pink"
          type={userType}
          onClick={userTypeChange}
        />
        <UserSelectBtn
          name="요양사"
          color="green"
          type={!userType}
          onClick={userTypeChange}
        />
      </div>
      <div id="loginArea" className={userType ? 'seniorColor' : 'careColor'}>
        <input
          type="text"
          className={userType ? 'seniorColor' : 'careColor'}
          id="userId"
          name="id"
          placeholder="아이디"
          onChange={onChange}
        />
        <input
          type="text"
          className={userType ? 'seniorColor' : 'careColor'}
          id="userPwd"
          name="pwd"
          placeholder="비밀번호"
          onChange={onChange}
        />
        <div
          id="loginLine"
          style={
            userType
              ? { borderTop: '4px solid #ed174f' }
              : { borderTop: '4px solid #55B682' }
          }
        />
        <div id="loginCheckbox">
          <input type="checkbox" name="rememberLogin" value="1" />
          로그인 상태 유지
        </div>
      </div>
      <SignBtn
        onClick={postForm}
        type={"button"}
        color={userType ? 'pink' : 'green'}
      >
        로그인
      </SignBtn>
      <div id="userLoginAction">
        <div className="userActionBtns" id="findId" onClick={goUrl}>
          아이디 찾기
        </div>
        <span className="vLine" />
        <div className="userActionBtns" id="findPwd" onClick={goUrl}>
          비밀번호 찾기
        </div>
        <span className="vLine" />
        <div className="userActionBtns" id="signUp" onClick={goUrl}>
          회원가입
        </div>
      </div>
    </Template>
  );
};

export default LoginPage;
