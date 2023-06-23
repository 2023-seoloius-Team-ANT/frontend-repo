import { useState} from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import axios from "../../node_modules/axios/index";
import Rejectmodals from "./write/Rejectmodal";


const Appbtn=(props)=>{
  const navigate = useNavigate();
  const [reason, setReason] = useState("");
  const [rejecModal, setrejecModal] = useState(false);

  const stateChange = ()=>{
    props.change()
  }
  const getreason = (r) => {
    setReason(r)
    console.log(reason)
  }
  const openmodal = () => {
    setrejecModal(!rejecModal);
  };
  const acceptControl = ()=>{
      axios.put(`/api/v1/connect/${props.no}/accept`,{ withCredentials: true, }).then((response)=>{
            if(response.data){
              alert("신청을 수락했습니다.")
              console.log(response.data);
              stateChange();
            }
          });
      } ;
  const declinecontrol = ()=>{
    console.log("reject 실행됨")
    console.log(reason)
      axios.put(`/api/v1/connect/${props.no}/decline`,null, {
        params:{reason : reason}
      },{ withCredentials: true, }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response)=>{
        if(response.data){
          alert("신청을 거절했습니다.")
          console.log(response.data);
          stateChange();
        }
      });
    };
  return(
    <>
    {rejecModal && <Rejectmodals getreason={getreason} declinecontrol={declinecontrol} openmodal={openmodal}/>}
    <ul>
      <li>
        <button onClick={()=>{navigate(`./view?seniorno=${props.value}&year=${props.year}&month=${props.month}`)}}>
          <img src={process.env.PUBLIC_URL + "/images/상세보기.png"} alt=""/>
        </button>
      </li>
      <li>
        <button onClick={() => {acceptControl(`${props.no}`)}}>
          <img src={process.env.PUBLIC_URL + "/images/동그라미.png"} alt=""/>
        </button>
      </li>
      <li>
        <button onClick={() => {openmodal()}}>
          <img src={process.env.PUBLIC_URL + "/images/엑스.png"} alt=""/>
        </button>
      </li>
    </ul>
    </>
  )
}
export default Appbtn;