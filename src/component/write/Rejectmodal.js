import './NoticeModal.scss';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Rejectmodals = (props) => {
  // 모달 끄기
  
  const setReason = (e) => {
    console.log(e.target.textContent)
    props.getreason(e.target.textContent)
    props.declinecontrol();
    props.openmodal();
  }
  // const startDecline = ()=>{
  //   props.declineControl();
  // }

  return (
    <div className="completeModalBack">
      <div className="completeModal">
        <div className="rtitle">
          <img src={process.env.PUBLIC_URL + '/images/heart.png'} alt="" />
          반려 사유를 알려주세요.
        </div>
        <div className="rmodalContent">
          <button onClick={setReason}>거리가 너무 멈</button>
          <button onClick={setReason}>시간이 안맞음</button>
          <button onClick={setReason}>고객과의 트러블</button>
          <button onClick={setReason}>개인 사정</button>
        </div>
      </div>
    </div>
  );
};
export default Rejectmodals;
