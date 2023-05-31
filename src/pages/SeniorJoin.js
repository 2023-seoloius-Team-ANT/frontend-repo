import { Link } from '../../node_modules/react-router-dom/dist/index';
import Template from '../component/Template';
import { useLocation } from 'react-router-dom';

const SeniorJoin = () => {
  const location = useLocation();
  let user = { ...location.state }.user
  
  return(
    <Template>
      <div id="title">회원가입</div>
      <div id="accountForm">
        
      </div> 
      <div id="profileForm"></div> 
      <div id="addressForm"></div> 
      <div id="caregiverForm"></div> 
      <div id="seniorForm"></div> 
    </Template>
    )
};

export default SeniorJoin;
