import { useState, useEffect } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import axios from "../../node_modules/axios/index";
const Appbtn=()=>{
  const navigate = useNavigate();
  const [accept, setAccept] = useState();
  const [decline, setDecline] = useState();
  useEffect(()=> {
    axios.put("/api/v1/connect/1/accept",{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setAccept(response.data.result);
      }
    });
    axios.put("/api/v1/connect/1/decline",{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setDecline(response.data.result);
      }
    });
  },[]);
  return(
    <ul>
      <li>
        <button onClick={()=>{navigate('./view')}}>
          <img src={process.env.PUBLIC_URL + "/images/상세보기.png"} alt=""/>
        </button>
      </li>
      <li>
        <button onClick={accept}>
          <img src={process.env.PUBLIC_URL + "/images/동그라미.png"} alt=""/>
        </button>
      </li>
      <li>
        <button onClick={decline}>
          <img src={process.env.PUBLIC_URL + "/images/엑스.png"} alt=""/>
        </button>
      </li>
    </ul>
  )
}
export default Appbtn;