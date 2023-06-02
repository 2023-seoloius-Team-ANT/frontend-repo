import Template from '../component/Template';
import { useLocation, useNavigate } from 'react-router-dom';
import './SignUpPage.scss';
import UserSelectBtn from '../component/common/button/UserSelectBtn';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import SignBtn from '../component/common/button/SignBtn';

const TOSIN_DATA = [
  { id: null, value: '통신사' },
  { id: '1', value: 'SKT' },
  { id: '2', value: 'KT' },
  { id: '3', value: 'U+' },
  { id: '4', value: '알뜰폰' },
];

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let user = { ...location.state }.user;
  let color = user === 'senior' ? 'pink' : 'green';

  const [gender, Isgender] = useState(true);
  const [modalState, setModalState] = useState(false);
  const [inputAddressValue, setInputAddressValue] = useState('');
  const [inputZipCodeValue, setInputZipCodeValue] = useState('');

  const genderChange = () => {
    Isgender(!gender);
  };

  const seniorCompleteSignup = () => {
    navigate('/');
  };
  const careCompleteSignup = () => {
    navigate('/signup/writeinfo');
  };

  const onCompletePost = (data) => {
    setModalState(false);
    setInputAddressValue(data.address);
    setInputZipCodeValue(data.zonecode);
  }; // onCompletePost 함수

  return (
    <Template>
      <form>
        <div className="signTitle">회원가입</div>
        <div className={`${color} signupArea`} id="accountForm">
          <div className="inputTemplate">
            <img
              src={process.env.PUBLIC_URL + '/images/userIcon.png'}
              alt=""
              id="inputImg"
            />
            <input
              className="signUpInput"
              type="text"
              name="userid"
              // onChange={valueChange}
              placeholder="아이디"
            />
          </div>
          <div className="hLine" id={color} />
          <div className="inputTemplate">
            <img
              src={process.env.PUBLIC_URL + '/images/lockIcon.png'}
              alt=""
              id="inputImg"
            />
            <input
              className="signUpInput"
              type="text"
              name="userpwd"
              // onChange={valueChange}
              placeholder="비밀번호"
            />
          </div>
          <div className="hLine" id={color} />
          <div className="inputTemplate">
            <img
              src={process.env.PUBLIC_URL + '/images/lockcheckIcon.png'}
              alt=""
              id="inputImg"
            />
            <input
              className="signUpInput"
              type="text"
              name="userpwdcheck"
              // onChange={valueChange}
              placeholder="비밀번호 확인"
            />
          </div>
        </div>

        {/* 인적사항 */}
        <div className={`${color} signupArea`} id="profileForm">
          <div className="inputTemplate">
            <img
              src={process.env.PUBLIC_URL + '/images/userIcon.png'}
              alt=""
              id="inputImg"
            />
            <input
              className="signUpInput"
              type="text"
              name="userid"
              // onChange={valueChange}
              placeholder="이름"
            />
          </div>
          <div className="hLine" id={color} />
          <div className="inputTemplate">
            <img
              src={process.env.PUBLIC_URL + '/images/calendarIcon.png'}
              alt=""
              id="inputImg"
            />
            <input
              className="signUpInput"
              type="text"
              name="userpwd"
              // onChange={valueChange}
              placeholder="생년월일"
            />
          </div>
          <div className="hLine" id={color} />
          <div className="inputTemplate">
            <img
              src={process.env.PUBLIC_URL + '/images/phoneIcon.png'}
              alt=""
              id="inputImg"
            />
            <input
              className="signUpInput"
              type="text"
              name="userpwdcheck"
              // onChange={valueChange}
              placeholder="전화번호"
            />
            <select className="userTelType">
              {TOSIN_DATA.map((el) => {
                return <option key={el.id}>{el.value}</option>;
              })}
            </select>
          </div>
          {/* 노인이면 보호자 번호 받기 */}
          {color === 'pink' && (
            <>
              <div className="hLine" id={color} />
              <div className="inputTemplate">
                <img
                  src={process.env.PUBLIC_URL + '/images/phoneIcon.png'}
                  alt=""
                  id="inputImg"
                />
                <input
                  className="signUpInput"
                  type="text"
                  name="userpwdcheck"
                  // onChange={valueChange}
                  placeholder="보호자 전화번호"
                />
                <select className="userTelType">
                  {TOSIN_DATA.map((el) => {
                    return <option key={el.id}>{el.value}</option>;
                  })}
                </select>
              </div>
            </>
          )}
          <div className="hLine" id={color} />
          <div className="genderSelect">
            <UserSelectBtn
              className="genderBtn"
              name="남자"
              type={gender}
              color="pink"
              onClick={genderChange}
            />
            <UserSelectBtn
              className="genderBtn"
              name="여자"
              type={!gender}
              color="green"
              onClick={genderChange}
            />
          </div>
        </div>
        <div className={`${color} signupArea`} id="addressForm">
          {modalState && (
            <div className="zipcodeModalBack">
              <div className="zipcodeModal">
                <button
                  type="button"
                  onClick={() => {
                    setModalState(false);
                  }}
                >
                  X
                </button>
                <DaumPostcode onComplete={onCompletePost}></DaumPostcode>
              </div>
            </div>
          )}
          <div className="signTitle add">주소</div>
          <div className="zipcodeFrom">
            <input
              type="text"
              defaultValue={inputZipCodeValue}
              placeholder="우편번호"
              className="zipcodeInput"
            />
            <button
              type="button"
              onClick={() => setModalState(true)}
              className="findZipcode"
            >
              주소찾기
            </button>
          </div>
          <input
            type="text"
            defaultValue={inputAddressValue}
            placeholder="주소"
            className="addressSetInput"
          />
          <input
            type="text"
            placeholder="상세주소"
            className="addressSetInput"
          />
        </div>
        {color === 'pink' && (
          <div className={`${color} signupArea`} id="seniorForm">
            <div className="inputTemplate">
              <img
                src={process.env.PUBLIC_URL + '/images/signupNoin.png'}
                alt=""
                id="inputImg"
              />
              <div className="seniorCustomAreaTitle">특이사항</div>
            </div>
            <div className="hLine" id={color} />
            <div className="inputSeniorInfo">
              <span>1.</span>
              <input
                className="signUpInput"
                type="text"
                name="userpwdcheck"
                // onChange={valueChange}
                placeholder="눌러서 입력해주세요"
              />
            </div>
            <div className="inputSeniorInfo">
              <span>2.</span>
              <input
                className="signUpInput"
                type="text"
                name="userpwdcheck"
                // onChange={valueChange}
                placeholder="눌러서 입력해주세요"
              />
            </div>
            <div className="inputSeniorInfo">
              <span>3.</span>
              <input
                className="signUpInput"
                type="text"
                name="userpwdcheck"
                // onChange={valueChange}
                placeholder="눌러서 입력해주세요"
              />
            </div>
          </div>
        )}
        {color === 'green' && (
          <div className={`${color} signupArea`} id="caregiverForm">
            <div className="inputTemplate">
              <img
                src={process.env.PUBLIC_URL + '/images/certificate.png'}
                alt=""
                id="inputImg"
              />
              <div className="CustomAreaTitle">자격증 첨부</div>
              <label htmlFor="certificateUpload">업로드</label>
            </div>
            <div className="inputTemplate">
              <input type="file" id="certificateUpload" />
            </div>
            <div className="hLine" id={color} />
            <div className="inputTemplate">
              <input type="checkbox" />
              <span style={{ color: '#00a22f' }}>{`[필수]`}</span>{' '}
              <span>인증 약관 전체동의</span>
            </div>
          </div>
        )}
      </form>
      <SignBtn
        onClick={color === 'pink' ? seniorCompleteSignup : careCompleteSignup}
        color={color}
      >
        회원가입
      </SignBtn>
    </Template>
  );
};

export default SignUpPage;
