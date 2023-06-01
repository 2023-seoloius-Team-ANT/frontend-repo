import CommonBtn from "../../component/Btn/CommonBtn";
import DropdownMenuData from "../../component/DropdownMenu/DropdownMenuData";
import FhIcon from "../../component/FHIcon/FhIcon";
import Header from "../../component/Header/Header";
import UserGPS from "../../component/UserGPS/UserGPS";
import "./FindHelper.css";
// import { FaSearch } from "react-icons/fa";
const FindHelper = () => {
  return (
    <div className="fhWrapper">
      <Header></Header>

      {/* 여기서 부터 라우팅으로 고민할 부분
          로그인하고 요양사 찾기를 눌렀을 때 여기로 이동 */}
      <FhIcon></FhIcon>

      <div className="GuideWrapper">
        <div>
          <DropdownMenuData />
        </div>
        <UserGPS />

        {/* 찾아보기 버튼 */}
        <CommonBtn />
        {/* 붉은 박스 */}
        <div className="Guidebox">
          <div className="GuideText">
            [년도]와 [월]을 선택 후 위의 찾아보기를 선택해 주세요
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default FindHelper;
