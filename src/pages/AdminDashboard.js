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
import axios from '../../node_modules/axios/index';



// 년도 드롭다운 추가
// 토글버튼  해서 월별 -> 년도별
// 사유 << db 저장
const memberdata = [];
const caregiverdata = [];
const membercnt = 0;
const caregivercnt = 0;
var newmem = 0;
var newcaremem = 0;

const AdminDashboard = () => {
  const [Memberdata, setMemberdata] = useState();
  const [Caregiverdata, setCaregiverdata] = useState();
  const [Newcargiverpaper, setNewcargiverpaper] = useState();
  const [Cstmcomplain, setCstmcomplain] = useState();
  const [Membercnt, setMembercnt] = useState();
  const [Caregivercnt, setCaregivercnt] = useState();
  
  var memberdata = Memberdata;
  var caregiverdata = Caregiverdata;
  const navigate = useNavigate();
  var newcargiverpaper = Newcargiverpaper;
  var cstmcomplain = Cstmcomplain;
  var matchappr = 0;
  var matchrejc = 0;
  
  var newcaremem = 0;
  var membercnt = Membercnt;
  var caregivercnt = Caregivercnt;

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
      getNewSNbymonth(e.target.value)

    }
    else if (e.target.value == "2022") {
      getNewSNbymonth(e.target.value)

    }
    else if (e.target.value == "2021") {
      getNewSNbymonth(e.target.value)
    }
    else if (e.target.value == "2020") {
      getNewSNbymonth(e.target.value)
    }
    else if (e.target.value == "2019") {
      getNewSNbymonth(e.target.value)
    }
  };
  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
    if (e.target.value == "2023") {
      getNewCGbymonth(e.target.value);
    }
    else if (e.target.value == "2022") {
      getNewCGbymonth(e.target.value);

    }
    else if (e.target.value == "2021") {
      getNewCGbymonth(e.target.value);
    }
    else if (e.target.value == "2020") {
      getNewCGbymonth(e.target.value);
    }
    else if (e.target.value == "2019") {
      getNewCGbymonth(e.target.value);
    }
  };
  //통계 드롭다운임 
  const handleSelect3 = (e) => {
    setSelected2(e.target.value);
 
  };
  //ComplainCaregiverCntDTO

  const getcplncareCnt = () => {
    axios.get('/api/v1/admin/work')
    .then((response) => {

      console.log('성공');
      console.log(JSON.stringify(response.data.result.complainCnt))
      console.log(JSON.stringify(response.data.result.caregiverCnt))
      setNewcargiverpaper(JSON.stringify(response.data.result.caregiverCnt))
      setCstmcomplain(JSON.stringify(response.data.result.complainCnt))


    }).catch(()=>{
      alert("로그인에 실패했습니다.")
  });
  };
  const getNewSNbymonth = (year) => {
    axios.get('/api/v1/admin/seinor/'+year)
    .then((response) => {
      console.log('성공');
      console.log(JSON.stringify(response.data.result.thismonth))
      console.log(JSON.stringify(response.data.result.one))
      var one = JSON.stringify(response.data.result.one);
      var two = JSON.stringify(response.data.result.two);
      var three = JSON.stringify(response.data.result.three);
      var four = JSON.stringify(response.data.result.four);
      var five = JSON.stringify(response.data.result.five);
      var six = JSON.stringify(response.data.result.six);
      var seven = JSON.stringify(response.data.result.seven);
      var eight = JSON.stringify(response.data.result.eight);
      var nine = JSON.stringify(response.data.result.nine);
      var ten = JSON.stringify(response.data.result.ten);
      var eleven = JSON.stringify(response.data.result.eleven);
      var twelve = JSON.stringify(response.data.result.twelve);
      var tparr = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve];
      console.log("thisishappy" + tparr);
      setMemberdata(tparr);
      setMembercnt(JSON.stringify(response.data.result.seniorAll));
      newmem = response.data.result.thismonth;
    }).catch(()=>{
      alert("로그인에 실패했습니다.")
  });
  };

  const getNewCGbymonth = (year) => {
    axios.get('/api/v1/admin/caregiver/'+year)
    .then((response) => {
      console.log('성공');
      console.log(JSON.stringify(response.data.result))
      console.log(JSON.stringify(response.data.result.one))
      var one = JSON.stringify(response.data.result.one);
      var two = JSON.stringify(response.data.result.two);
      var three = JSON.stringify(response.data.result.three);
      var four = JSON.stringify(response.data.result.four);
      var five = JSON.stringify(response.data.result.five);
      var six = JSON.stringify(response.data.result.six);
      var seven = JSON.stringify(response.data.result.seven);
      var eight = JSON.stringify(response.data.result.eight);
      var nine = JSON.stringify(response.data.result.nine);
      var ten = JSON.stringify(response.data.result.ten);
      var eleven = JSON.stringify(response.data.result.eleven);
      var twelve = JSON.stringify(response.data.result.twelve);
      var tparr = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve];
      console.log("thisishappy" + tparr);
      setCaregiverdata(tparr);
      setCaregivercnt(JSON.stringify(response.data.result.seniorAll));
      newcaremem = response.data.result.thismonth;
    }).catch(()=>{
      alert("로그인에 실패했습니다.")
  });
  };

  useEffect(() => {
    getcplncareCnt();
    getNewCGbymonth(2023);
    getNewSNbymonth(2023);
    console.log("useeffect call")
    
    //모달쪽인듯
    // const handleClick = (e) => {
    //   const clickedElement = e.target;
    //   const tgclass = clickedElement.className;
      
    //   if (tgclass.search('css-1nos2st') !== -1) {
    //     console.log(clickedElement.className);
    //     const parent = clickedElement.parentNode;
    //     const grandparent = parent.parentNode;
    //     const grandparentChildNodes = Array.from(grandparent.childNodes);
    //     const parentIndex = grandparentChildNodes.indexOf(parent);
    //     console.log({parentIndex});
    //     setModalOpen(true);
    //     setId("test")
    //   }
    // };
    // document.addEventListener('click', handleClick);
    // return () => {
    //   document.removeEventListener('click', handleClick);
    // };
  }, []);
  
  useEffect(() => {

    console.log("call")
    
  }, [Caregiverdata]);

  


  
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
                        <div class="MuiTypography-root MuiTypography-button css-zs61of-MuiTypography-root">월별
                        </div>
                      </div>
                    </div>
                  </div>
                  <select className='admindropdownleft' onChange={handleSelect3} value={Selected}>
                      <option value={"2019"}>2019년</option>
                      <option value={"2020"}>2020년</option>
                      <option value={"2021"}>2021년</option>
                      <option value={"2022"}>2022년</option>
                      <option value={"2023"}>2023년</option>
                    </select>
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
