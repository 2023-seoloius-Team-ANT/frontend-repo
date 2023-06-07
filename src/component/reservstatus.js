import React, { useState, useEffect } from "react";

let ReservStatus = () => {
  let [month, setMonth] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',]);
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
  }, []);

  return (
    <>
      <div className="reservStatus">
        <div className="rsheader">
          <div className="rstitle">
            <button className="rsbtn">
              <img src="/images/reserv.png" alt="" />
              <span>예약현황</span>
            </button>
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
          {month.map(function (a, i) {
            return (
              <div className="rsinfo" key={i}>
                <div className="rsmonth">
                  <p>{month[i]} 월</p>
                </div>
                <div className="rsuser">
                  <p>이름:??? | 나이:??세 | 성별:?</p>
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
