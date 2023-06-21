import React, { useEffect, useState } from 'react';
import './ComplainModal.scss';
import axios from '../../../node_modules/axios/index';
import { useNavigate } from "react-router-dom";


//show: 보여주기 여부
//open: Header.js에서 가져온 모달을 열기 위한 props
//close: Header.js에서 가져온 모달을 닫기 위한 props
//header: 모달 Title
const ComplainModalBody = (props) => {
    const navigate = useNavigate();

    const closeModal = () => {
        props.closeModal(false);
    }
    
    const completeComplain = () => {
      axios.put(`/api/v1/complain/${props.complainno}`, {
        headers: {
          'Content-Type' : 'multipart/form-data',
        },
      }).then((response) => {
        alert("신고 처리 완료");
        closeModal();
        window.location.reload();
      });
    }

    return (
      <div className="CPcompleteModalBack">
        
        <div className="CPcompleteModal">
        <button className='CPcomplain_delbtn' onClick={closeModal}>x</button>
          <div className="CPcomplain_title">
            <a>신고 내용</a>
            </div>
            <div className='CPdetail'>
              <a>신고자: {props.nickname}</a>
              <a>날짜: {props.date}</a>
            </div>
         
          <div className="CPmodalContent">
            <br/>
            <div className='CPcompalincontext'>
                {props.content}
            </div>
            
          </div>
          <div>
            <button onClick={completeComplain} type="button" class="btn btn-primary btn-lg" style={{marginTop:"20px", fontSize: "25px", fontWeight: "600"}}>처리완료</button>
          </div>
          
        </div>
      </div>
    );
}

export default ComplainModalBody