import axios from "axios";
import { useEffect, useState } from "react";

const Header = ()=>{
  // let [user, setUser] = useState({});
  let user = '박상준';
  // useEffect(()=> {
  //   axios.get("/api/v1/caregiver/1",{ withCredentials: true, }).then((response)=>{
  //     if(response.data){
  //       console.log(response.data);
  //       setUser(response.data.result);
  //     }
  //   });
  // },[]);

  return(
    <div>
  <div className="info">
    <div className="user">
      <p>{user} 님,</p>
      <p>어서오세요.</p>
      <button className="mypage">마이페이지</button>
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