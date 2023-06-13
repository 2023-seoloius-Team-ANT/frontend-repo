import axios from "axios";
import './cmpheader.css';
import { useEffect, useState } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

const Cmpheader = ()=>{
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
    <>
    <div className="cmpheader">
    <div className="cgminfo">내 정보</div>
    <div className="cginfo">
      <div className="cguser">
        <div className="cguser_name">
        <span>{user.name}</span>
        </div>
        <div className="cguser_other">
        <ul>
          <li>성별: {user.genderStr}</li>
          <li>연령: {user.age}세</li>
        </ul>
        <ul>
          <li>근무횟수: {user.workday}</li>
          <li>근무시간: 협의가능</li>
        </ul>
        </div>
      </div>
      <div className="cguserimg">
      <img src={user.profile}></img>
      </div>
    </div>
    </div>
    </>
  )
}
export default Cmpheader;