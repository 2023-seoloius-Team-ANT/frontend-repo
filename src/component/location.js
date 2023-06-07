import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
let Location = () => {
  const [seniorinfo, setSeniorinfo] = useState({});
  useEffect(() => {
    axios.get("/api/v1/senior/1",{ withCredentials: true, }).then((response)=>{
      if(response.data){
        console.log(response.data);
        setSeniorinfo(response.data.result);
        console.log(seniorinfo.lati)
        console.log(seniorinfo.lon)
      }
    });
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
          height: "400px",   // 지도의 높이
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
    // script.async = "async";
    document.head.appendChild(script);
  }, []);

    const navigate = useNavigate();

  return (
    <div>
      <div className="location">
        <div className="lTitle">
          <img src="images/nav.png" alt=""/>
          <p>위치: {seniorinfo.address}</p>
        </div>
        <div className="map">
          <div onLoad="initTmap()">
            <div id="map_div"></div>
          </div>
        </div>
      </div>
      <div className="home">
        <input onClick={()=>{navigate('/')}} type="button" name="" value="목록으로" />
      </div>
    </div>
  );
};

export default Location;