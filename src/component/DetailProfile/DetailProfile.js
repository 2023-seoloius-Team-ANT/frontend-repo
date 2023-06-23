import { useNavigate } from 'react-router-dom';
import './DetailProfile.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const DetailProfile = (props) => {
  const navigate = useNavigate();
  const carename = props.careName;
  const [careName, setCareName] = useState();
  const [careAns, setCareAns] = useState();
  const qname = {
    1: '자기소개',
    2: '근무내용',
    3: '경험',
    4: '자격증',
    5: '장점',
    6: '포부',
  };
  const tes = () => {
    axios
      .get(`api/v1/caregiver/${props.careno}/${props.queno}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          setCareName(response.data.result.name);
          setCareAns(response.data.result.answer);
        }
      })
      .catch((error) => {
        // 오류가 발생했을 때의 처리
        console.log(error);
      });
  };

  function speak(text) {
    var opt_prop = {
      rate: 1,
      pitch: 1.2,
      lang: 'ko-KR',
    };
    console.log('speack start');

    window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

    const prop = opt_prop || {};

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = prop.rate || 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = prop.pitch || 1; // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || 'ko-KR';
    speechMsg.text = text;
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
  }

  useEffect(() => {
    tes();
  });

  // const questionId = props.match.params.id; // 라우트 매개변수에서 questionId를 가져옵니다.

  // react-router-dom 버전 6부터는 element로 컴포넌트를 만들고,
  // route props(match, history, location)을 받지 않는다.
  // 따라서, useParams, useLocation, useHistory를 사용하여
  // route context에 접근한다
  // const { id } = useParams(props);

  return (
    <div className="detailProfileWrapper">
      <div className="detailHeader">
        <div className="detailTag">질문</div>
        <span>
          {careName} 님의 {qname[props.queno]}
        </span>
      </div>
      <div className="detailTag">답변</div>
      <div className="detailContent">
        <span className="detailSpeechText">{careAns}</span>
      </div>
      <div className="detailFooter">
        <div
          className="ttsBtn"
          onClick={() => {
            speak(careAns);
          }}
        >
          <span>듣기</span>
        </div>
        <div
          className="ttsBtn2"
          onClick={() => {
            navigate(
              `/HelperDetailProfilePage?careno=${props.careno}&queno=${
                props.queno === '6' ? 1 : parseInt(props.queno) + 1
              }&year=${props.year}&month=${props.month}&careName=${carename}`,
            );
            tes();
          }}
        >
          <span>다음 질문</span>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
