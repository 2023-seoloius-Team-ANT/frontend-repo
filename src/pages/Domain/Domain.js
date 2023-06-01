import Header from "../../component/Header/Header";
import "./Domain.css";
import DomainImg from "../../images/domain.png";
import AudioImg from "../../images/audioImg.png";
import HelperImg from "../../images/helperImg.png";
import MapImg from "../../images/mapImg.png";

const Domain = () => {
  return (
    <div className="domainWrapper">
      <Header></Header>

      <div className="domain">
        <img src={DomainImg} alt="" />
      </div>

      <div className="selectBtn">
        <input type="button" value="고령자" className="oldP" />
        <input type="button" value="요양사" className="helpP" />
      </div>

      <div className="selectWrapper">
        <div className="helpWrapper">
          <div className="helpAud">
            <b>원하는 요양사를 찾아 보세요</b>
            <img src={AudioImg} alt="" />
          </div>

          <div className="findHelp">
            <input type="button" value="찾아보기" className="helpBtn" />
            <img src={HelperImg} alt="" />
          </div>
        </div>

        <div className="findWrapper">
          <div className="findAud">
            <b>가고싶은 장소를 안내해 드려요</b>
            <img src={AudioImg} alt="" />
          </div>

          <div className="findMap">
            <input type="button" value="위치찾기" className="findBtn" />
            <img src={MapImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
