import { useNavigate, useParams } from "react-router-dom";
import "./DetailProfile.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailProfile = (props) => {
  const navigate = useNavigate();

  const [careName, setCareName] = useState();
  const [careAns, setCareAns] = useState();
  const qname = {
    1: "자기소개",
    2: "근무내용",
    3: "경험",
    4: "자격증",
    5: "장점",
    6: "포부",
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
  useEffect(() => {
    tes();
  }, []);

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
        <span>{careAns}</span>
      </div>
      <div className="detailFooter">
        <div className="ttsBtn">
          <img src="/images/ttsBtn-stop.png" alt="" />
          <span>다시 듣기</span>
        </div>
        <div
          className="ttsBtn"
          onClick={() => {
            navigate(
              `/HelperDetailProfilePage?careno=${props.careno}&queno=${
                props.queno === "6" ? 1 : parseInt(props.queno) + 1
              }&year=${props.year}&month=${props.month}`
            );
            tes();
          }}
        >
          <img src="/images/ttsBtn-replay.png" alt="" />
          <span>다음 질문</span>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
