import './cal.css';
// import './reset.css';
import Header from '../component/header.js'
import ReservStatus from '../component/reservstatus.js'
import Reserv from '../component/reserv.js'
import Top from '../component/top.js'


function Cal() {

  return (
    <div className="wrap">
      <Top/>
      <Header/>
      <Reserv/>
      <ReservStatus/>  
  </div>
  );
}
export default Cal;
