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

        if (adddpathname === '/admin/home') {
            setAddflag('대시보드');
            
        } else if (adddpathname === '/admin/complain') {
            setAddflag('고객 불만사항');
        } else if (adddpathname === '/admin/list') {
            setAddflag('요양사 회원 관리');
        }
    }, [location.pathname]);

    return (
        <div className="adheader">
            <div className='adheaderimgboxwrap'>
                <div className='adheaderimgbox'>
                     <img className='adminhomebtn' src="/images/adminhomebtn.png" onClick={() => navigate('/')} alt="Admin Home Button" />
                     <span>&nbsp;&nbsp;</span>
                </div>
                
                
                <div className='adheaderimgtxt'>{addflag}</div>
            </div>

            <div className='adheaderbox'>
                <div className='admenubox'>
                    <div className='admenudashboard' onClick={() => navigate('/admin/home')}><p>대시보드</p></div>

                    <div className='admenucgmanagement' onClick={() => navigate('/admin/list')}><p>요양사 회원 관리</p></div>

                    <div className='admenucl' onClick={() => navigate('/admin/complain')}><p>고객 불만사항</p></div>
                </div>
            </div>
        </div>
    );
};

export default Adheader;