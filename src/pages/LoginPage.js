import Template from '../component/Template';
import SignBtn from '../component/common/SignBtn';
import UserSelectArea from '../component/common/UserSelectArea';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <Template>
      <UserSelectArea/>
      <div className="loginArea">
        <input type="text" id="userId" name="id" placeholder="아이디" />
        <input type="text" id="userId" name="id" placeholder="비밀번호" />
        <div id="loginLine" />
        <div id="loginCheckbox">
          <input type="checkbox" name="loginCheck" value="1" />
          로그인 상태 유지
        </div>
      </div>
      <SignBtn>로그인</SignBtn>
    </Template>
  );
};

export default LoginPage;
