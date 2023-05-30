import Template from '../component/Template';
import AbledBtn from '../component/common/AbledBtn';
import DisabledBtn from '../component/common/DisableBtn';
import MainFunction from '../component/main/MainFunction';
import './MainPage.css';
const MainPage = () => {
  return (
    <Template>
      <div className="MainBanner">
        <img src={"images/BannerImg.png"} alt="" id="BannerImg" />
        <div id="BannerText">
          <span>
            나를 위한 <span className="BanerTxtDeco">이웃주민</span>,
          </span>
          <span className="BanerTxtDeco">
            서로이웃
            <img src={"images/heart.png"} alt="" id="BanHeart" />
          </span>
        </div>
      </div>
      <div className="MainBtns">
        <AbledBtn>고령자</AbledBtn>
        <DisabledBtn>요양사</DisabledBtn>
      </div>
      <div className="functionList">
        <MainFunction type="care" />
        <MainFunction type="location" />
      </div>
    </Template>
  );
};

export default MainPage;
