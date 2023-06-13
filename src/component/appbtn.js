import { useState, useEffect } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import axios from "../../node_modules/axios/index";
const Appbtn=(props)=>{
  const navigate = useNavigate();
  const stateChange = ()=>{
    props.change()
  }
  const acceptControl = (action)=>{
    // console.log(type)
    if(action === "accept"){
      axios.put(`/api/v1/connect/${JSON.parse(localStorage.getItem('user')).numberPk}/accept`,{ withCredentials: true, }).then((response)=>{
            if(response.data){
              console.log(response.data);
              stateChange();
            }
          });
    } else if(action === "decline"){
      axios.put(`/api/v1/connect/${JSON.parse(localStorage.getItem('user')).numberPk}/decline`,{ withCredentials: true, }).then((response)=>{
        if(response.data){
          console.log(response.data);
          stateChange();
        }
      });
    }
  };
  return(
    <ul>
      <li>
        <button onClick={()=>{navigate(`./view?seniorno=${props.value}&year=${props.year}&month=${props.month}`)}}>
          <img src={process.env.PUBLIC_URL + "/images/상세보기.png"} alt=""/>
        </button>
      </li>
      <li>
        <button onClick={() => acceptControl("accept")}>
          <img src={process.env.PUBLIC_URL + "/images/동그라미.png"} alt=""/>
        </button>
      </li>
      <li>
        <button onClick={() => acceptControl("decline")}>
          <img src={process.env.PUBLIC_URL + "/images/엑스.png"} alt=""/>
        </button>
      </li>
    </ul>
  )
}
export default Appbtn;