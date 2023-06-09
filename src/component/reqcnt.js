import axios from "axios";
import { useState, useEffect } from "react";
  const Reqcnt = ()=>{
  const [req, setReq] = useState([]);
  useEffect(()=> {
    axios.get("/api/v1/connect/1").then((response)=>{
      if(response.data){
        console.log(response.data);
        setReq(response.data.result);
      }
    });
  },[]);
  const reqcnt = req.length;
  return(
       <>
        <div className="alarm">
          <img src={process.env.PUBLIC_URL + "/images/종.png"} alt=""/>
          
        </div>
        <span>총 {reqcnt}건의 예약 요청이 들어왔습니다.</span>
        </>
    
  )
}
export default Reqcnt;