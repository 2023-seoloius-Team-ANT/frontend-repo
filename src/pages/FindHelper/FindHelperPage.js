import { useState } from 'react';
import FindBtn from '../../component/Btn/FindBtn';
import DropdownMenuData from '../../component/DropdownMenu/DropdownMenuData';
import FhIcon from '../../component/FHIcon/FhIcon';
import UserGPS from '../../component/UserGPS/UserGPS';
import './FindHelperPage.css';
import Template from '../../component/Template';

const FindHelperPage = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const changeYear = (value) => {
    setYear(value);
  };
  const changeMonth = (value) => {
    setMonth(value);
  };

  return (
    <Template>
      <div className="fhWrapper">
        <FhIcon></FhIcon>
        <div className="GuideWrapper">
          <div>
            <DropdownMenuData
              changeYear={changeYear}
              changeMonth={changeMonth}
            />
          </div>
          <UserGPS address={JSON.parse(localStorage.getItem('user')).address} />
        </div>

        <div>
          {/* 찾아보기 버튼 */}
          <FindBtn
            year={year}
            month={month}
            lon={JSON.parse(localStorage.getItem('user')).lon}
            lati={JSON.parse(localStorage.getItem('user')).lati}
          />
        </div>
      </div>
    </Template>
  );
};

export default FindHelperPage;
