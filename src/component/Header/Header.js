import "./Header.css";
const Header = () => {
  return (
    <div className="headWrapper">
      <div className="logo">
        <img src="images/logo.png" alt="" />
      </div>
      <div className="loginBtn">
        <input type="button" className="login" value="로그인" />
      </div>
    </div>
  );
};

export default Header;
