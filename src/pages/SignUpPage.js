import Template from '../component/Template';
import { useLocation, useNavigate } from 'react-router-dom';
import './SignUpPage.scss';
import UserSelectBtn from '../component/common/button/UserSelectBtn';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import SignBtn from '../component/common/button/SignBtn';
import axios from '../../node_modules/axios/index';

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

  const [genderBtn, setGenderBtn] = useState(true);
  const [modalState, setModalState] = useState(false);
  const [inputZipCodeValue, setInputZipCodeValue] = useState('');
  const [registerForm, setForm] = useState({
    id: '',
    pwd: '',
    name: '',
    tel: '',
    telcare: '',
    birth: '',
    address: '',
    gender: 0,
    profileImage: null,
    certiImage: null,
    lati: '',
    lon: '',
    spec1: '',
    spec2: '',
    spec3: '',
  });

  const genderChange = () => {
    const nextForm = {
      ...registerForm,
      gender: registerForm.gender === 0 ? 1 : 0,
    };
    setForm(nextForm);
    setGenderBtn(!genderBtn);
  };
  const fileChange = (e) => {
    const nextForm = {
      ...registerForm,
      [e.target.name]: e.target.files[0],
    };
    setForm(nextForm);
  };
  const formChange = (e) => {
    
    const nextForm = {
      ...registerForm,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const postForm = () => {
    if (user === 'senior') {
      axios.post('/api/v1/senior', registerForm).then((response) => {
        alert("회원가입이 완료되었습니다!")
        seniorCompleteSignup();
      }).catch((error) => {
        alert("오류로 인해 회원가입 실패하였습니다.");
        navigate(1);
      });
    } else if (user === 'caregiver') {
      const formData = new FormData();
      for(let key in registerForm){
        formData.append(key, registerForm[key]);
      }
      console.log(formData);
      axios.post('/api/v1/caregiver', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        careCompleteSignup(response.data.result.careno)
      }).catch((error) => {
        alert("오류로 인해 회원가입 실패하였습니다.");
        navigate(1);
      });
    }
  };

  const seniorCompleteSignup = () => {
    navigate('/');
  };
  const careCompleteSignup = (careno) => {
    navigate(`/signup/writeinfo?careno=${careno}`);
  };

  
  const onCompletePost = (data) => {
    setModalState(false);
    setInputZipCodeValue(data.zonecode);
    changeLonLat(data.address)
    
  }; // 주소 받아오기

//위도경도
  const changeLonLat = (location) => {
    
    axios.get(`https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result&count=1&resCoordType=EPSG3857&reqCoordType=WGS84GEO&appKey=Bf69bciABC95oILSnW7Ot7WQIx2yL2iFri7gSmg1&searchKeyword=${location}`)
      .then((response) => {
				var lat = response.data.searchPoiInfo.pois.poi[0].frontLat;
				var lon = response.data.searchPoiInfo.pois.poi[0].frontLon;
        const nextForm = {
          ...registerForm,
          address: location,
          lati : lat,
          lon : lon,
        };
        setForm(nextForm);
        });
  }
  return (
    <Template>
      
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
              name="id"
              onChange={formChange}
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
              type="password"
              name="pwd"
              onChange={formChange}
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
              type="password"
              name="pwdCheck"
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
              name="name"
              onChange={formChange}
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
              name="birth"
              onChange={formChange}
              placeholder="생년월일(8글자)"
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
              name="tel"
              onChange={formChange}
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
                  name="telcare"
                  onChange={formChange}
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
              type={genderBtn}
              color="pink"
              onClick={genderChange}
            />
            <UserSelectBtn
              className="genderBtn"
              name="여자"
              type={!genderBtn}
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
                <DaumPostcode onComplete ={onCompletePost}></DaumPostcode>
              </div>
            </div>
          )}
          <div className="signTitle add">주소</div>
          <div className="zipcodeForm">
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
            defaultValue={registerForm.address}
            placeholder="주소"
            className="addressSetInput"
            name="address"
            
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
                name="spec1"
                onChange={formChange}
                placeholder="눌러서 입력해주세요"
              />
            </div>
            <div className="inputSeniorInfo">
              <span>2.</span>
              <input
                className="signUpInput"
                type="text"
                name="spec2"
                onChange={formChange}
                placeholder="눌러서 입력해주세요"
              />
            </div>
            <div className="inputSeniorInfo">
              <span>3.</span>
              <input
                className="signUpInput"
                type="text"
                name="spec3"
                onChange={formChange}
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
              <input
                type="file"
                onChange={fileChange}
                name="certiImage"
                id="certificateUpload"
              />
            </div>
            <div className="hLine" id={color} />
            <div className="inputTemplate">
              <img
                src={process.env.PUBLIC_URL + '/images/photo.png'}
                alt=""
                id="inputImg"
              />
              <div className="CustomAreaTitle">프로필 사진</div>
              <label htmlFor="profileUpload">업로드</label>
            </div>
            <div className="inputTemplate">
              <input
                type="file"
                name="profileImage"
                onChange={fileChange}
                id="profileUpload"
              />
            </div>
            <div className="hLine" id={color} />
            <div className="inputTemplate">
              <input type="checkbox" />
              <span style={{ color: '#00a22f' }}>{`[필수]`}</span>{' '}
              <span>인증 약관 전체동의</span>
            </div>
          </div>
        )}
        <div id='signupGo'>
        <SignBtn type={"button"} color={color} onClick={postForm}>
          회원가입
        </SignBtn>
        </div>
    </Template>
  );
};

export default SignUpPage;
