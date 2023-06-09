import "./FindBtn.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FindBtn = (props) => {
  const navigate = useNavigate();
  const [caregiverinfo, setCaregiverinfo] = useState([]);

  const [showDiv, setShowDiv] = useState(true);

  const handleClick = () => {
    setShowDiv(false);
    axios
      .get(
        `/api/v1/caregiver/${props.year}/${props.month}/${props.lon}/${props.lati}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const result = Object.values(res.data.result);
        setCaregiverinfo([...result]);
      })
      .catch(() => {
        alert("년도와 월을 선택해 주세요");
        setShowDiv(true);
      });
  };

  return (
    <div className="FindBtnWrapper">
      <div>
        <button className="FindBtn" onClick={handleClick}>
          <span>찾아보기</span>
        </button>
      </div>
      <div>
        {showDiv ? (
          <div className="Guidebox">
            <div className="GuideText">
              [년도]와 [월]을 선택 후<br></br> 위의 찾아보기를 선택해 주세요
            </div>
          </div>
        ) : (
          <div className="HelperListTemplete">
            {caregiverinfo.map((array, arrayIndex) => (
              <div
                key={arrayIndex}
                className="HelperProfWrapper"
                onClick={() =>
                  navigate(
                    `/helperProfilePage?careno=${caregiverinfo[arrayIndex].careno}&year=${props.year}&month=${props.month}&careName=${caregiverinfo[arrayIndex].name}`
                  )
                }
              >
                <div className="HelperProfName">
                  <span>{caregiverinfo[arrayIndex].name}</span>
                </div>
                <div className="HelperProfContent">
                  <div className="ContentText">
                    <span>
                      {caregiverinfo[arrayIndex].genderStr} /{" "}
                      {caregiverinfo[arrayIndex].age} 세
                    </span>
                    <span>
                      근무요일 : 주 {caregiverinfo[arrayIndex].workday}일
                    </span>
                    <span>근무시간 : {caregiverinfo[arrayIndex].worktime}</span>
                  </div>
                  <div className="HelperProfImg">
                    <img src={caregiverinfo[arrayIndex].profile} alt="" />
                  </div>
                </div>
                <div className="HelperTagWrapper">
                  <div className="HelperTag">
                    <span>#{caregiverinfo[arrayIndex].char1}</span>
                  </div>
                  <div className="HelperTag">
                    <span>#{caregiverinfo[arrayIndex].char2}</span>
                  </div>
                  <div className="HelperTag">
                    <span>#{caregiverinfo[arrayIndex].char3}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBtn;
