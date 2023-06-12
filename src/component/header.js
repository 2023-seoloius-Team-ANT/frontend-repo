import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

const Header = ()=>{
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(()=> {
    axios.get(`/api/v1/caregiver/${JSON.parse(localStorage.getItem('user')).numberPk}`,{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setUser(response.data.result);
      }
    });
  },[]);

  return(
    <div>
  <div className="info">
    <div className="user">
      <p>{user.name} 님,</p>
      <p>어서오세요.</p>
      <button onClick={()=>{navigate(`/caregivermain/caregivermypage?careno=${JSON.parse(localStorage.getItem('user')).numberPk}`)}}
      className="mypage">마이페이지</button>
    </div>
    <div className="fox">
      <img  src={process.env.PUBLIC_URL + "/images/fox 1.png" }alt=""/>
    </div>
    <div className="tree">
      <img src={process.env.PUBLIC_URL + "/images/tree.png" }alt=""/>
    </div>
    <div className="green"></div>
  </div>
  </div>
  )
}
export default Header;