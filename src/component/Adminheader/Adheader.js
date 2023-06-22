import { useNavigate, useLocation } from 'react-router-dom';
import './Adheader.css';
import React, { useEffect, useState } from 'react';

const Adheader = () => {
  const [addflag, setAddflag] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    const adddpathname = location.pathname;
    console.log(adddpathname);

    if (adddpathname === '/adminhome') {
      setAddflag('대시보드');
    } else if (adddpathname === '/admin/complain') {
      setAddflag('고객 불만사항');
    }
  }, [location.pathname]);

  return (
    <div className="adheader">
      <div className="adheaderimgboxwrap">
        <div className="adheaderimgbox"></div>
        <img
          className="adminhomebtn"
          src="/images/adminhomebtn.png"
          onClick={() => navigate('/')}
          alt="Admin Home Button"
        />
        <span>&nbsp; / &nbsp;</span>
        <br />
        <div className="adheaderimgtxt">{addflag}</div>
      </div>

      <div className="adheaderbox">
        <div className="admenubox">
          <div
            className="admenudashboard"
            onClick={() => navigate('/adminhome')}
          >
            <p>대시보드</p>
          </div>
          <div className="admenucgmanagement" onClick={() => navigate()}>
            <p>요양사 회원 관리</p>
          </div>
          <div className="admenucl" onClick={() => navigate()}>
            <p>고객 불만사항</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adheader;
