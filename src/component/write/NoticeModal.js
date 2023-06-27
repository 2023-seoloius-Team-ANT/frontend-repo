import './NoticeModal.scss';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoticeModal = () => {
  const navigate = useNavigate();
  // 모달 끄기
  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 3000);
    return () => clearTimeout(timer);
    //아래 문구는 경고어 사라지게 하는거
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="completeModalBack">
      <div className="completeModal">
        <div className="title">
          <img src={process.env.PUBLIC_URL + '/images/heart.png'} alt="" />
          신청완료
        </div>
        <div className="modalContent">
          <div>
            신청결과는 추후 메일로 보내드리겠습니다. 신청일 기준 1~2일 소요될 수
            있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoticeModal;
