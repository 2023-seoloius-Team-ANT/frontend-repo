import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import ModalComplain from "../pages/ModalComplain";

const Header = ()=>{
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(()=> {
    axios.get(`/api/v1/caregiver/${JSON.parse(localStorage.getItem('user')).numberPk}`,{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setUser(response.data.result);
      }
    });
  },[]);

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = e => {
    setIsOpen(e);
  } 

  const openModal = () => {
      setIsOpen(true);
  }

  return(
    <div>
  <div className="info">
    <div className="user">
      <p>{user.name} 님,</p>
      <p>어서오세요.</p>
      <div className="pagebtn">
      <button onClick={()=>{navigate(`/caregivermain/caregivermypage?careno=${JSON.parse(localStorage.getItem('user')).numberPk}`)}}
      className="mypage">내정보</button>
      <button onClick={()=>{localStorage.clear();navigate('/')}}
      className="mypage">로그아웃</button>
      <button onClick={openModal}
      className="mypage">신고</button>
      </div>
      {
        isOpen &&
        <ModalComplain closeModal = {closeModal}></ModalComplain>
      }

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