import { useEffect, useState } from 'react';
import './CaregiverInfoWrite.scss';
import SignBtn from '../common/button/SignBtn';
import axios from '../../../node_modules/axios/index';

const CaregiverInfoWrite = (props) => {
  const [caregiverInfo, setCaregiverInfo] = useState({
    char1: '',
    char2: '',
    char3: '',
    workday: '',
    workTime: '',
    info: '',
    service: '',
    exp: '',
    certifi: '',
    good: '',
    goal: '',
  });
  // 여기에 url정보 빼오자 회원번호
  useEffect(()=>{
    if(localStorage.length === 1){
      axios.get(`/api/v1/caregiver/${JSON.parse(localStorage.getItem('user')).numberPk}`)
      .then((response)=>{
        console.log(response.data.result)
        setCaregiverInfo({
          char1 : response.data.result["char1"],
          char2 : response.data.result["char2"],
          char3 : response.data.result["char3"],
          workday: response.data.result["workday"],
          workTime: response.data.result["worktime"],
          info: response.data.result["info"],
          service: response.data.result["service"],
          exp: response.data.result["exp"],
          certifi: response.data.result["certifi"],
          good: response.data.result["good"],
          goal: response.data.result["goal"],
        })
      })

    }
  }, [])

  //   날짜 1~7일만 받자
  const handleWorkdayChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= 1 && newValue <= 7) {
      setCaregiverInfo({ ...caregiverInfo, [e.target.name]: e.target.value });
    } else if (isNaN(newValue)) {
      setCaregiverInfo({ ...caregiverInfo, [e.target.name]: '' });
    } else {
      alert('주 1일에서 주 7일까지만 설정할 수 있습니다.');
      setCaregiverInfo({ ...caregiverInfo, [e.target.name]: '' });
    }
  };

  const formChange = (e) => {
    const nextForm = {
      ...caregiverInfo,
      [e.target.name]: e.target.value,
    };
    setCaregiverInfo(nextForm);
  };

  const completeModal = () => {
    axios.put(`/api/v1/caregiver/${props.careno}`, caregiverInfo, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
      props.opencompleteModal();
    });
  };

  return (
    <div className="caregiverInfoTemplate">
      
      <div className="infoWriteArea">
        <div className="infoGuide">
          <div className="infoMenu">내 키워드</div>
          <div className="infoDescript">
            본인을 대표하는 특징을 소개해주세요.<br/> EX {`)`} 열정적인,
            꼼꼼한
          </div>
        </div>
        <div id="careKeyword">
          <div>
            #
            <input
              type="text"
              className="keywordInput"
              name="char1"
              placeholder="키워드1"
              value={caregiverInfo.char1}
              onChange={formChange}
            />
          </div>
          <div>
            #
            <input
              type="text"
              className="keywordInput"
              name="char2"
              placeholder="키워드2"
              value={caregiverInfo.char2}
              onChange={formChange}
            />
          </div>
          <div>
            #
            <input
              type="text"
              className="keywordInput"
              name="char3"
              placeholder="키워드3"
              value={caregiverInfo.char3}
              onChange={formChange}
            />
          </div>
        </div>
      </div>
      <div className="infoWriteArea">
        <div className="infoGuide">
          <div className="infoMenu">근무일정</div>
          <div className="infoDescript">근무시간을 설정해주세요</div>
        </div>
        <div id="careSchedule">
          <div>
            주
            <input
              type="number"
              name="workday"
              value={caregiverInfo.workday}
              onChange={handleWorkdayChange}
              placeholder={1}
            />
            일
          </div>
          <input
            type="text"
            name="workTime"
            placeholder="근무시간 Ex) 오전, 오후, 13:00~19:00 등등"
            value={caregiverInfo.workTime}
            onChange={formChange}
          />
        </div>
      </div>

      <div className="infoWriteArea">
        <div className="infoGuide">
          <div className="infoMenu">기본 질문 1</div>
          <div className="infoDescript">본인의 자기소개</div>
        </div>
        <textarea
          className="questionBox"
          placeholder="본인을 소개해주세요"
          name="info"
          onChange={formChange}
          value={caregiverInfo.info}
        >
        </textarea>
      </div>

      <div className="infoWriteArea">
        <div className="infoGuide">
          <div className="infoMenu">기본 질문 2</div>
          <div className="infoDescript">본인의 근무내용</div>
        </div>
        <textarea
          className="questionBox"
          placeholder="고객에게 제공할 서비스를 소개해주세요.&#10;ex) 말벗, 청소 등등"
          name="service"
          onChange={formChange}
          value={caregiverInfo.service}
        >
        </textarea>
      </div>

      <div className="infoWriteArea">
        <div className="infoGuide">
          <div className="infoMenu">경력 질문 1</div>
          <div className="infoDescript">본인의 경험</div>
        </div>
        <textarea
          className="questionBox"
          placeholder="요양사님의 경험/경력을 소개해주세요."
          name="exp"
          onChange={formChange}
          value={caregiverInfo.exp}
        >
        </textarea>
      </div>

      <div className="infoWriteArea">
        <div className="infoGuide">
          <div className="infoMenu">경력 질문 2</div>
          <div className="infoDescript">본인의 자격증</div>
        </div>
        <textarea
          className="questionBox"
          placeholder="요양사님의 자격증과 취득일자를 적어주세요."
          name="certifi"
          onChange={formChange}
          value={caregiverInfo.certifi}
        >
        </textarea>
      </div>

      <div className="infoWriteArea">
        <div className="infoGuide">
          <div className="infoMenu">인성 질문 1</div>
          <div className="infoDescript">본인의 장점</div>
        </div>
        <textarea
          className="questionBox"
          placeholder="요양사님의 장점을 소개해주세요."
          name="good"
          onChange={formChange}
          value={caregiverInfo.good}
        >
        </textarea>
      </div>

      <div className="infoWriteArea">
        <div className="infoGuide">
          <div className="infoMenu">인성 질문 2</div>
          <div className="infoDescript">본인의 포부</div>
        </div>
        <textarea
          className="questionBox"
          placeholder="요양사님의 포부를 소개해주세요."
          name="goal"
          onChange={formChange}
          value={caregiverInfo.goal}
        >
        </textarea>
      </div>
      <div className='writeinfoBtnArea'>
      <SignBtn type="button" color="green" onClick={completeModal}>
        저장하기
      </SignBtn>
      </div>
    </div>
  );
};

export default CaregiverInfoWrite;
