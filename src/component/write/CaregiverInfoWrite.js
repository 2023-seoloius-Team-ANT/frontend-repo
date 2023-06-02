import { useState } from 'react';
import './CaregiverInfoWrite.scss';

const CaregiverInfoWrite = () => {
  const [caregiverInfo, setCaregiverInfo] = useState({
    char1: '',
    char2: '',
    char3: '',
    workday: '',
    info: '',
    visitTime: '',
    exp: '',
    certifi: '',
    good: '',
    goal: '',
  });
  //   날짜 1~7일만 받자
  const handleWorkdayChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= 1 && newValue <= 7) {
      setCaregiverInfo({ ...caregiverInfo, [e.target.name]: newValue });
    } else if (isNaN(newValue)) {
      setCaregiverInfo({ ...caregiverInfo, [e.target.name]: '' });
    } else {
      alert('주 1일에서 주 7일까지만 설정할 수 있습니다.');
      setCaregiverInfo({ ...caregiverInfo, [e.target.name]: '' });
    }
  };

  return (
    <div className="caregiverInfoTemplate">
      <form>
        <div className="infoWriteArea">
          <div className="infoGuide">
            <div className="infoMenu">내 키워드</div>
            <div className="infoDescript">
              본인을 대표하는 특징을 소개해주세요.&nbsp;&nbsp; EX {`)`}{' '}
              열정적인, 꼼꼼한
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
              />
            </div>
            <div>
              #
              <input
                type="text"
                className="keywordInput"
                name="char2"
                placeholder="키워드2"
              />
            </div>
            <div>
              #
              <input
                type="text"
                className="keywordInput"
                name="char3"
                placeholder="키워드3"
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
              />
              일
            </div>
            <input
              type="text"
              name="visitTime"
              placeholder="근무시간 Ex) 오전, 오후, 13:00~19:00 등등"
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
            name="defaultQuestion1"
          ></textarea>
        </div>

        <div className="infoWriteArea">
          <div className="infoGuide">
            <div className="infoMenu">기본 질문 2</div>
            <div className="infoDescript">본인의 근무내용</div>
          </div>
          <textarea
            className="questionBox"
            placeholder="고객에게 제공할 서비스를 소개해주세요.&#10;ex) 말벗, 청소 등등"
            name="defaultQuestion2"
          ></textarea>
        </div>

        <div className="infoWriteArea">
          <div className="infoGuide">
            <div className="infoMenu">경력 질문 1</div>
            <div className="infoDescript">본인의 경험</div>
          </div>
          <textarea
            className="questionBox"
            placeholder="요양사님의 경험/경력을 소개해주세요."
            name="careerQuestion1"
          ></textarea>
        </div>

        <div className="infoWriteArea">
          <div className="infoGuide">
            <div className="infoMenu">경력 질문 2</div>
            <div className="infoDescript">본인의 자격증</div>
          </div>
          <textarea
            className="questionBox"
            placeholder="요양사님의 자격증과 취득일자를 적어주세요."
            name="careerQuestion2"
          ></textarea>
        </div>

        <div className="infoWriteArea">
          <div className="infoGuide">
            <div className="infoMenu">인성 질문 1</div>
            <div className="infoDescript">본인의 장점</div>
          </div>
          <textarea
            className="questionBox"
            placeholder="요양사님의 장점을 소개해주세요."
            name="personalityQuestion1"
          ></textarea>
        </div>

        <div className="infoWriteArea">
          <div className="infoGuide">
            <div className="infoMenu">인성 질문 2</div>
            <div className="infoDescript">본인의 포부</div>
          </div>
          <textarea
            className="questionBox"
            placeholder="요양사님의 포부를 소개해주세요."
            name="personalityQuestion2"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CaregiverInfoWrite;
