import React, { useEffect, useState } from 'react';
import './ModalComplain.scss';
import axios from '../../node_modules/axios/index';


const ModalComplain = (props) => {
    const [complainTxt, setComplainTxt] = useState('');

    const closeModal = () => {
        props.closeModal(false);
    }

    const txtChange = (e) => {
        setComplainTxt(e.target.value);
    };

    const postComplain = () => {
      axios.post('api/v1/complain', {
          careno: JSON.parse(localStorage.getItem('user')).numberPk,
          content: complainTxt
        },
        {headers:{
          'Content-Type':'multipart/form-data',
        }}).then((res)=>{
          console.log(res)
        });
        alert('감사합니다. 빠른 시일 내에 시정하겠습니다.')
        closeModal()
    }


    return (
      <div className="CMcompleteModalBack">
        <div className="CMcompleteModalWrite">
        <button className='complain_delbtn' onClick={closeModal}>x</button>
          <div className="CMcomplain_title">
            <h1>신고하기</h1>
          </div>
          <div className="CMmodalContent">
            <textarea
            className="CMcomplainput"
            placeholder="서비스에 대한 불편 사항을 적어주세요"
            name="CMcomplain"
            onChange={txtChange}
            value={complainTxt}
            >
            </textarea>
            
          </div>
          <div>
            <button className='CMSubmit' onClick={postComplain}>접수하기</button>
          </div>
          
        </div>
      </div>
    );
}

export default ModalComplain