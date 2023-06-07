import Template from '../component/Template';
import MainFunction from '../component/main/MainFunction';
import UserSelectBtn from '../component/common/button/UserSelectBtn';
import './MainPage.scss';

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
        <UserSelectBtn name="고령자" type={true} color="pink"/>
        <UserSelectBtn name="요양사" type={false} color="green" />
      </div>
      <div className="functionList">
        <MainFunction type="care" />
        <MainFunction type="location" />
      </div>
    </Template>
  );
};

export default MainPage;
