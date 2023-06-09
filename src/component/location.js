import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
let Location = (props) => {
  const [seniorinfo, setSeniorinfo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/senior/${props.no}`, { withCredentials: true });
        if (response.data) {
          console.log(response.data);
          setSeniorinfo(response.data.result);
          console.log(seniorinfo.lati);
          console.log(seniorinfo.lon);
         
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      function initTmap() {
        const mapDiv = document.getElementById("map_div");
        while (mapDiv.firstChild) {
          mapDiv.removeChild(mapDiv.firstChild);
        }
        
        map = new Tmapv3.Map("map_div", {
          center: new Tmapv3.LatLng(${seniorinfo.lati}, ${seniorinfo.lon}),
          width: "100%",   // 지도의 넓이
          height: "200px",   // 지도의 높이
          zoom: 16   // 지도 줌레벨
        });
        var marker = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(${seniorinfo.lati}, ${seniorinfo.lon}),   //Marker의 중심좌표 설정.
          map: map   //Marker가 표시될 Map 설정..
        });
      }
      
      initTmap();
    `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      document.head.removeChild(script);
    };
  }, [seniorinfo.lati, seniorinfo.lon]);

    

  return (
    <div>
      <div className="location">
        <div className="lTitle">
          <img src={process.env.PUBLIC_URL + "/images/nav.png"} alt=""/>
          <p>위치: {seniorinfo.address}</p>
        </div>
        <div className="map">
          <div onLoad="initTmap()">
            <div id="map_div"></div>
          </div>
        </div>
      </div>
      <div className="home">
        <input onClick={()=>{navigate('/caregivermain')}} type="button" name="" value="목록으로" />
      </div>
    </div>
  );
};

export default Location;