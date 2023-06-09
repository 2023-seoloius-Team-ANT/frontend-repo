import axios from "axios";
import "./ApplyModalBtn.css";
import React, { useState, useRef } from "react";

const ApplyModalBtn = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();
  const seniorno = 1;
  const [dataform, setDataform] = useState({
    careno: props.careno,
    seniorno: seniorno,
    // seniorno: localStorage.getItem("user").name,
    year: props.year,
    month: props.month,
  });

  const openModal = () => {
    axios
      .post("api/v1/connect", dataform, {
        headers: { "Content-Type": `multipart/form-data` },
      })
      .then((response) => {
        setModalOpen(true);
      })
      .catch((error) => {
        // 오류가 발생했을 때의 처리
        console.log(error);
        alert("이미 신청하셨습니다.");
      });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div className="ApplyWrapper">
      <div className="ApplyBtn" onClick={openModal}>
        <img src="images/check-mark2.png" alt="" />
        <span>신청하기</span>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <div className="close">
              <span onClick={closeModal}>&times;</span>
            </div>
            <img src="images/ApplySuccess.png" alt="" />
            <div className="md-content">
              <p>[ {props.careName} ] 요양사님을</p>
              <p>신청하였습니다.</p>
              <p>추후 결과를 문자로 </p>
              <p>전달해 드리겠습니다. </p>
              <p>
                신청일 기준
                <span>1~2</span>일
              </p>
              <p>소요 될 수 있습니다. </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyModalBtn;
