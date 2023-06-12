import { useState, useEffect } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import axios from "../../node_modules/axios/index";
const Appbtn=(props)=>{
  const navigate = useNavigate();
  const [accept, setAccept] = useState();
  const [decline, setDecline] = useState();
  const handleAcceptClick=()=> {
    axios.put(`/api/v1/connect/${props.no}/accept`,{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setAccept(response.data.result);
      }
    });
  };
  const handleDeclineClick=()=>{
    axios.put(`/api/v1/connect/${props.no}/decline`,{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setDecline(response.data.result);
      }
    });
  };
  return(
    <ul>
      <li>
        <button onClick={()=>{navigate(`./view?seniorno=${props.value}`)}}>
          <img src={process.env.PUBLIC_URL + "/images/상세보기.png"} alt=""/>
        </button>
      </li>
      <li>
        <button onClick={()=>{handleAcceptClick(`${props.value}`)}}>
          <img src={process.env.PUBLIC_URL + "/images/동그라미.png"} alt=""/>
        </button>
      </li>
      <li>
        <button onClick={handleDeclineClick}>
          <img src={process.env.PUBLIC_URL + "/images/엑스.png"} alt=""/>
        </button>
      </li>
    </ul>
  )
}
export default Appbtn;