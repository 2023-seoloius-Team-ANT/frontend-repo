import { useNavigate } from 'react-router-dom';
import './DetailBtn.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetailBtn = (props) => {
  const navigate = useNavigate();
  const [carename, setCarename] = useState('');
  const handleBtnClick = (value) => {
    navigate(
      `/HelperDetailProfilePage?careno=${props.careno}&queno=${value}&year=${props.year}&month=${props.month}&careName=${props.careName}`,
    );
  };

  const tes = () => {
    axios
      .get(`api/v1/caregiver/${props.careno}`, {
        withCredentials: true,
      })
      .then((response) => {
        setCarename(response.data.result.name);
      })
      .catch((error) => {
        // 오류가 발생했을 때의 처리
        console.log(error);
      });
  };
  useEffect(() => {
    tes();
  }, []);

  let queno = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <div className="DetailWrapper1">
      <span>기본사항</span>
      <div className="DetailBtnWrapper1">
        <button
          key={queno[0]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[0].id)}
        >
          <span>{carename} 님의 자기소개</span>
        </button>
        <button
          key={queno[1]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[1].id)}
        >
          <span>{carename} 님의 근무내용</span>
        </button>
      </div>

      <span>경력</span>
      <div className="DetailBtnWrapper1">
        <button
          key={queno[2]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[2].id)}
        >
          <span>{carename} 님의 경험</span>
        </button>
        <button
          key={queno[3]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[3].id)}
        >
          <span>{carename} 님의 자격증</span>
        </button>
      </div>

      <span>인성</span>
      <div className="DetailBtnWrapper1">
        <button
          key={queno[4]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[4].id)}
        >
          <span>{carename} 님의 장점</span>
        </button>
        <button
          key={queno[5]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[5].id)}
        >
          <span>{carename} 님의 포부</span>
        </button>
      </div>
    </div>
  );
};

export default DetailBtn;
