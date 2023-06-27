import axios from "axios";
import { useState, useEffect } from 'react';
let Special = (props)=>{
  const [seniorinfo, setSeniorinfo] = useState({});
  useEffect(()=> {
    axios.get(`/api/v1/senior/${props.no}`,{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setSeniorinfo(response.data.result);
      }
    });
  },[]);

  return(
    <div>
  <div className="dspecial">
      <div className="sBtn">
        <div>
          <img src={process.env.PUBLIC_URL + "/images/느낌표.png" }alt=""/>
        </div>
        <p>특이사항</p>
      </div>
      <div className="sList">
        <img src={process.env.PUBLIC_URL + "/images/check-mark 8.png"} alt=""/>
        <p>{seniorinfo.spec1}</p>
      </div>
      <div className="sList">
        <img src={process.env.PUBLIC_URL + "/images/check-mark 8.png"} alt=""/>
        <p>{seniorinfo.spec2}</p>
      </div>
      <div className="sList">
        <img src={process.env.PUBLIC_URL + "/images/check-mark 8.png"} alt=""/>
        <p>{seniorinfo.spec3}</p>
      </div>
    </div>
  </div>
  )
}
export default Special;