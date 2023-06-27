import Template from '../component/Template';
import MainFunction from '../component/main/MainFunction';
import UserSelectBtn from '../component/common/button/UserSelectBtn';
import './MainPage.scss';

const MainPage = () => {
  return (
    <Template>
      <div className="MainBanner">
        <div id="BannerText">
          <span>
            나를 위한 <span className="BanerTxtDeco">이웃주민</span>,
          </span>
          <span className="BanerTxtDeco">
            서로이웃
            <img src={"images/heart.png"} alt="" id="BanHeart" />
          </span>
        </div>
        <img src={"images/BannerImg.png"} alt="" id="BannerImg" />
      </div>
      <div className="functionList">
        <MainFunction type="care" />
        <MainFunction type="location" />
      </div>
    </Template>
  );
};

export default MainPage;
