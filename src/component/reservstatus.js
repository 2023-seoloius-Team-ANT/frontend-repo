import React, { useState, useEffect } from "react";
import axios from "../../node_modules/axios/index";

let ReservStatus = () => {
  const [acceptList, setAcceptList] = useState(Array.from({ length: 12 }, (_, i) => ({
    name: "",
    age: null,
    gender: "",
    month: i+1
  })));
  
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const start = currentYear - 50;
    const end = currentYear;
    setStartYear(start);
    setEndYear(end);
    setSelectedYear(currentYear);

    axios.get("/api/v1/connect/confirm/1/2023",{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        const newAcceptList = [...acceptList];

        response.data.result.map((data, i) => {
          newAcceptList.map((accept, idx) => {
            if (accept.month == data.month) {
              newAcceptList[idx] = {...data}
            }
          })
        });

        setAcceptList(newAcceptList)
      }
    });
  }, []);

  useEffect(() => {console.log(acceptList)},[acceptList])

  return (
    <>
      <div className="reservStatus">
        <div className="rsheader">
          <div className="rstitle">
            <div className="rsbtn">
              <img src={process.env.PUBLIC_URL + "/images/reserv.png"} alt="" />
              <span>예약현황</span>
            </div>
          </div>
          <div className="yearOption">
            <select
              name="yearbox"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            >
              {startYear && endYear && (
                Array.from({ length: endYear - startYear + 1 }, (_, index) => (
                  <option key={startYear + index} value={startYear + index}>
                    {startYear + index}년
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
        <div className="rscontent">
          {acceptList.map(function (accept, i) {
            return (
              <div className="rsinfo" key={i}>
                <div className="rsmonth">
                  <p>{accept.month} 월</p>
                </div>
                <div className="rsuser">
                {accept.age !== null ?(
                  <p>이름: {accept.name} | 나이:{accept.age}세 | 성별:{accept.gender}</p>
                ):(
                  <p>예약없음</p>
                )}
                
                </div>
              </div>
              )
           
          })}
        </div>
      </div>
    </>
  )
}

export default ReservStatus;
