import axios from "axios";
import { useState, useEffect } from "react";

const Reqcnt = () => {
  const [req, setReq] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/connect/${JSON.parse(localStorage.getItem("user")).numberPk}`);
        if (response.data) {
          console.log(response.data);
          setReq(response.data.result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 의존성 배열로 지정하여 한 번만 실행되도록 설정

  const reqcnt = req.length;

  return (
    <>
      <div className="alarm">
        <img src={process.env.PUBLIC_URL + "/images/종.png"} alt="" />
      </div>
      <span>총 {reqcnt}건의 예약 요청이 들어왔습니다.</span>
    </>
  );
};

export default Reqcnt;
