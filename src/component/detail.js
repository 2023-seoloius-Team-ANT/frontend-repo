import axios from "axios";
import { useState, useEffect } from 'react';

let Detail = ()=>{
  const [seniorinfo, setSeniorinfo] = useState({});
  useEffect(()=> {
    axios.get("/api/v1/senior/1",{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setSeniorinfo(response.data.result);
      }
    });
  },[]);

  return(
    <div>
  <div className="detail">
    <div className="dTitle">
      <p>상세 정보</p>
    </div>
    <div className="dInfo">
      <ul className="col">
        <li>성함</li>
        <li>생년월일</li>
        <li>성별</li>
        <li>본인 연락처</li>
        <li>보호자 연락처</li>
        <li>신청 날짜</li>
      </ul>
      <ul className="row">
        <li>{seniorinfo.name}</li>
        <li>{seniorinfo.birth}</li>
        <li>{seniorinfo.gender}</li>
        <li>{seniorinfo.tel}</li>
        <li>{seniorinfo.telCare}</li>
        <li>{seniorinfo.conmonth}</li>
      </ul>
    </div>
  </div>
  </div>
  )
}
export default Detail;