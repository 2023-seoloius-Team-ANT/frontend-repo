import './NoticeModal.scss';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CareModal = () => {
  const navigate = useNavigate();
  // 모달 끄기
  useEffect(() => {
    const timer = setTimeout(() => navigate('/caregivermain'), 3000);
    return () => clearTimeout(timer);
    //아래 문구는 경고어 사라지게 하는거
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="completeModalBack">
      <div className="completeModal">
        <div className="title">
          <img src={process.env.PUBLIC_URL + '/images/heart.png'} alt="" />
          저장완료
        </div>
        <div className="modalContent">
          <div>
            성공적으로 저장이 완료되었습니다.
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareModal;
