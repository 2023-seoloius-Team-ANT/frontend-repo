import axios from "axios";
import { useState, useEffect } from 'react';
let Special = ()=>{
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
  <div className="special">
      <div className="sBtn">
        <button>
          <img src="images/느낌표.png" alt=""/>
        </button>
        <p>특이사항</p>
      </div>
      <div className="sList">
        <img src="images/check-mark 8.png" alt=""/>
        <p>{seniorinfo.spec1}</p>
      </div>
      <div className="sList">
        <img src="images/check-mark 8.png" alt=""/>
        <p>{seniorinfo.spec2}</p>
      </div>
      <div className="sList">
        <img src="images/check-mark 8.png" alt=""/>
        <p>{seniorinfo.spec3}</p>
      </div>
    </div>
  </div>
  )
}
export default Special;