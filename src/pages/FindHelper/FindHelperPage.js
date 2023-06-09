import { useState } from "react";
import FindBtn from "../../component/Btn/FindBtn";
import DropdownMenuData from "../../component/DropdownMenu/DropdownMenuData";
import FhIcon from "../../component/FHIcon/FhIcon";
import UserGPS from "../../component/UserGPS/UserGPS";
import "./FindHelperPage.css";
import Template from "../../component/Template";

// 유저 정보 받아오기
var user = {
  seniorno: "1",
  name: "전다연",
  roles: null,
  address: "충북 괴산군 청안면 질마로 1271-59",
  lon: "142",
  lati: "44",
};
// JSON.parse(localStorage.getItem('user')).numberPk = {}

const FindHelperPage = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const changeYear = (value) => {
    setYear(value);
  };
  const changeMonth = (value) => {
    setMonth(value);
  };

  return (
    <Template>
      <div className="fhWrapper">
        <FhIcon></FhIcon>
        <div className="GuideWrapper">
          <div>
            <DropdownMenuData
              changeYear={changeYear}
              changeMonth={changeMonth}
            />
          </div>
          <UserGPS address={user.address} />
        </div>

        <div>
          {/* 찾아보기 버튼 */}
          <FindBtn year={year} month={month} lon={user.lon} lati={user.lati} />
        </div>
      </div>
    </Template>
  );
};

export default FindHelperPage;
