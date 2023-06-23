import axios from "axios";
import { useState, useEffect } from 'react';

let Detail = (props)=>{
  const [seniorinfo, setSeniorinfo] = useState({});
  useEffect(()=> {
    axios.get(`/api/v1/senior/${props.no}`,{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setSeniorinfo(response.data.result);
      }
    }).catch(()=>{
      console.log(props.no)
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
        <li>{props.year}년&nbsp;{props.month}월</li>
      </ul>
    </div>
  </div>
  </div>
  )
}
export default Detail;