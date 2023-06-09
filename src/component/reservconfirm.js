import axios from "../../node_modules/axios/index";
import { useEffect, useState } from "react";

const Reservconfirm = () => {
  const [acceptList, setAcceptList] = useState(Array.from({ length: 12 }, (_, i) => ({
    name: "",
    age: null,
    gender: "",
    month: i + 1
  })));

  useEffect(() => {
    axios.get(`/api/v1/connect/confirm/${JSON.parse(localStorage.getItem('user')).numberPk}/2023`, { withCredentials: true }).then((response) => {
      if (response.data) {
        console.log(response.data);
        const newAcceptList = [...acceptList];

        response.data.result.forEach((data) => {
          const monthIndex = data.month - 1;
          newAcceptList[monthIndex] = { ...data };
        });

        setAcceptList(newAcceptList);
      }
    });
  }, []);

  const currentMonth = new Date().getMonth() + 1;

  return (
    <>
      <div className="alarm">
        <img src={process.env.PUBLIC_URL + "/images/cal.png" }alt="" />
      </div>
      <span>
        {acceptList[currentMonth - 1].name === "" ? (
          <span>예약없음</span>
        ) : (
          <span>이번달은 {acceptList[currentMonth - 1].name} 님이 예약되었습니다.</span>
        )}
      </span>
    </>
  );
};

export default Reservconfirm;
