
import './MainFunction.css';

const typeMap = {
  care: '원하는 요양사를 찾아보세요.',
  location: '가고싶은 장소를 안내해 드려요.',
};
const styleMap = {
  care: 'care',
  location: 'map',
};

const MainFunction = ({ type }) => {
  const text = typeMap[type];
  const styleType = styleMap[type];
  return (
    <div id="mainfunction">
      <div id="info">
        <div id="infoText">{text}</div>
        <img src={'images/audioplay.png'} alt="" id="audioimg" />
      </div>
      <div className="showImg" id={styleType + 'show'}>
        <button className="findBtn" id={styleType + 'FindBtn'}>
          찾아보기
        </button>
        {type === 'care' ? (
          <img src={'images/findcare.png'} alt="" id="infoImg" />
        ) : (
          <img src={'images/findmap.png'} alt="" id="infoImg" />
        )}
      </div>
    </div>
  );
};
export default MainFunction;
