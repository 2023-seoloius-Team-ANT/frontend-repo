import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Routes, Route, Link, useNavigate} from 'react-router-dom';

let Application = ()=>{
  let [user, setUser] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    function handleScroll() {
      // 스크롤 이벤트 발생 시 수행할 작업을 여기에 작성합니다.
      // 예: 스크롤 위치를 확인하거나 추가 데이터를 로드하는 등의 작업을 수행할 수 있습니다.
      console.log('스크롤 이벤트 발생');
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=> {
    axios.get("/api/v1/connect/1",{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setUser(response.data.result);
      }
    });
  },[]);
  return(
    <div>
      <div className="application">
            <p className="appTitle">신청 현황</p>
              <div className="appContent">
              {
                user.map((a,i)=>(
                 
                    <div className="appInfo">
                  <div className="appUser">
                    <p>이름: {user[i].name}</p>
                    <p>나이: {user[i].age}세</p>
                    <p>성별: {user[i].gender}</p>
                  </div>
                  <ul>
                    <li>
                      <button onClick={()=>{navigate('./view')}}>
                        <img src="images/상세보기.png" alt=""/>
                      </button>
                    </li>
                    <li>
                      <button>
                        <img src="images/동그라미.png" alt=""/>
                      </button>
                    </li>
                    <li>
                      <button>
                        <img src="images/엑스.png" alt=""/>
                      </button>
                    </li>
                  </ul>
                </div>
                  
                ))
              }
              </div>
            </div>
    </div>
  )
}
export default Application;