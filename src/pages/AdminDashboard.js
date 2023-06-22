import './AdminDashboard.css';
// import DefaultLineChart from '../component/DefaultLineChart'
import React, { useEffect, useState, useRef } from 'react';
import Adheader from '../component/Adminheader/Adheader'
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Material Dashboard 2 React themes
import theme from "../assets/theme";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import DataTable from "examples/Tables/DataTable";

import AdminModal from '../component/Adminmodal';
import { useNavigate} from 'react-router-dom';


// 년도 드롭다운 추가
// 토글버튼  해서 월별 -> 년도별


//

// 사유 << db 저장
const memberdata = [10,20,30,50, 40, 30, 22, 50, 25, 40, 20, 50];
const caregiverdata = [10,20,30,50, 40, 100, 100, 110, 200, 300, 250, 100];

const membercnt = memberdata[memberdata.length-1];
const caregivercnt = caregiverdata[caregiverdata.length-1];



const AdminDashboard = () => {
  const [Memberdata, setMemberdata] = useState([10,20,30,50, 40, 100, 100, 110, 200, 300, 250, 100]);
  const [Caregiverdata, setCaregiverdata] = useState([10,20,30,50, 40, 100, 100, 110, 200, 300, 250, 100]);
  var memberdata = Memberdata;
  var caregiverdata = Caregiverdata;
  const navigate = useNavigate();


  
  
  var newcargiverpaper = 0;
  var cstmcomplain = 0;
  var matchappr = 0;
  var matchrejc = 0;
  var newmem = 0;
  var newcaremem = 0;

  var matchingstatics = [{
    date: "2023/06/21",
    membname: "홍길동",
    cgname: "이순신",
    apprvorrejc: "승인",
    resn: "-",
  }
]
  var matchcnt = matchingstatics.length;
  
  const [modalOpen, setModalOpen] = useState(false);
  const [Id, setId] = useState('');


  const [Selected, setSelected] = useState("2023");
  const [Selected2, setSelected2] = useState("2023");

  const handleSelect = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);

    if (e.target.value == "2023") {
      memberdata = [10,20,30,50, 40, 100, 100, 110, 200, 300, 250, 100];
      setMemberdata(memberdata);
      console.log("2023선택")


    }
    else if (e.target.value == "2022") {
      memberdata = [1,2,3];
      setMemberdata(memberdata);
      
      console.log(memberdata)
      console.log("2022선택")

    }
    else if (e.target.value == "2021") {
      memberdata = [1];
      setMemberdata(memberdata);

    }
    else if (e.target.value == "2020") {
      memberdata = [2,3,4,56];
      setMemberdata(memberdata);
      
    }
    else if (e.target.value == "2019") {
      memberdata = [1,2,3,4,5];
      setMemberdata(memberdata);

    }
  };




  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
    console.log(e.target.value);

    if (e.target.value == "2023") {
      caregiverdata = [10,20,30,50, 40, 100, 100, 110, 200, 300, 250, 100];
      setCaregiverdata(caregiverdata);
      console.log("2023선택")


    }
    else if (e.target.value == "2022") {
      caregiverdata = [1,2,3];
      setCaregiverdata(caregiverdata);
      
      console.log(memberdata)
      console.log("2022선택")

    }
    else if (e.target.value == "2021") {
      caregiverdata = [1];
      setCaregiverdata(caregiverdata);

    }
    else if (e.target.value == "2020") {
      caregiverdata = [2,3,4,56];
      setCaregiverdata(caregiverdata);
      
    }
    else if (e.target.value == "2019") {
      caregiverdata = [1,2,3,4,5];
      setCaregiverdata(caregiverdata);

    }
  };



  useEffect(() => {
 
    const handleClick = (e) => {
      const clickedElement = e.target;
      const tgclass = clickedElement.className;
      if (tgclass.search('css-1nos2st') !== -1) {
        console.log(clickedElement.className);
        const parent = clickedElement.parentNode;
        const grandparent = parent.parentNode;
        const grandparentChildNodes = Array.from(grandparent.childNodes);
        const parentIndex = grandparentChildNodes.indexOf(parent);
        console.log({parentIndex});
        setModalOpen(true);
        setId("test")
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);


  
  function appdecmaker(arr) {
    var temparr = arr;
    for (let i = 0; i < temparr.length; i++) {
      var tg = arr[i].apprvorrejc;
      if (tg == "승인") {

        matchappr += 1;
      }
      else if (tg == "거절") {
  
        matchrejc += 1
      }
    }
  }
  appdecmaker(matchingstatics);
    
  return (
    <ThemeProvider theme={theme}>
      {modalOpen && Id && <AdminModal setModalOpen={setModalOpen} />}
      <CssBaseline />
      <div className='adwrap'>
          <Adheader />

          <div className='adcontent'>

              <div className='adctfourdiv'>
                  <div className='adcdiv0 adcchild'>
                    <p><span>현재 고객 : {membercnt}명 </span><span>요양사 회원 :{caregivercnt}명 </span><span className='admingolist' onClick={() => navigate('/admin/list')}> 요양사 승인대기 : <span className='adminred'>{newcargiverpaper}</span></span><span className='admincomplain' onClick={() => navigate('/admin/complain')}>불만사항 대기 : <span className='adminred' >{cstmcomplain}</span></span></p>
                    <p><span>신규가입 고객 : {newmem}명 </span><span>신규가입 요양사 :{newcaremem}명 </span><span>금월 매칭수 : {matchcnt} </span><span>금월 매칭 성공 : {matchappr}</span><span>금월 매칭 실패 : {matchrejc}</span></p>
                  </div>
                  <div className='adcdiv1 adcchild'>
                  <DefaultLineChart
                      icon={{ color: "info", component: "leaderboard" }}
                      title="신규 노인 회원수 동향"
                      description="월별(명)"
                      chart={{
                        labels: ["Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [
                          {
                            label: "Organic Search",
                            color: "info",
                            data: Memberdata,
                          },
                
                        ],
                      }}
                    />
                    <select className='admindropdownleft' onChange={handleSelect} value={Selected}>
                      
                      <option value={"2019"}>2019년</option>
                      <option value={"2020"}>2020년</option>
                      <option value={"2021"}>2021년</option>
                      <option value={"2022"}>2022년</option>
                      <option value={"2023"}>2023년</option>
                    </select>
                    
                  </div>
                  <div className='adcdiv2 adcchild'>
                    <DefaultLineChart
                      icon={{ color: "primary", component: "leaderboard" }}
                      title="신규 요양사 회원 동향"
                      description="월별(명)"
                      chart={{
                        labels:  ["Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [
                    
                          {
                            label: "Direct",
                            color: "primary",
                            data: caregiverdata,
                          },
                        ],
                      }}
                    />
                    <select className='admindropdownright' onChange={handleSelect2} value={Selected2}>
                      <option value={"2019"}>2019년</option>
                      <option value={"2020"}>2020년</option>
                      <option value={"2021"}>2021년</option>
                      <option value={"2022"}>2022년</option>
                      <option value={"2023"}>2023년</option>
                    </select>
      
                    

                  </div>
                  <div className='adcdiv3 adcchild'>
                  <div class="MuiBox-root css-1wj75gi2">
                    <div class="MuiBox-root css-1sxreoi2">
                      <span class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeMedium css-wh7jmd-MuiIcon-root" aria-hidden="true">
                        leaderboard
                      </span>
                    </div>
                    <div class="MuiBox-root css-hj60hx">
                      <h6 class="MuiTypography-root MuiTypography-h6 css-wa3mca-MuiTypography-root">매칭 통계</h6>
                      <div class="MuiBox-root css-16pyyvj">
                        <div class="MuiTypography-root MuiTypography-button css-zs61of-MuiTypography-root">일자별
                        </div>
                      </div>
                    </div>
                  </div>
                  <DataTable
                    icon={{ color: "info", component: "leaderboard" }}
                    title="신규 회원수 동향"
                    description="월별(명)"
                    table={{
                      columns: [
                        { Header: "일자", accessor: "date", width: "15%" },
                        { Header: "회원명", accessor: "membname", width: "15%" },
                        { Header: "요양사", accessor: "cgname", width: "15%" },
                        { Header: "승인/거절", accessor: "apprvorrejc", width: "12%" },
                        { Header: "사유", accessor: "resn", width: "12%" },
                      ],
                      rows: matchingstatics
                    }}
                  />
    
                  </div>
              </div>
          </div>
          
      </div>
    </ThemeProvider>
  );
};

export default AdminDashboard;
