import './view.css';
import Top from '../component/top.js'
import Detail from '../component/detail.js'
import Special from '../component/special.js'
import Location from '../component/location.js'

function View(){
  return(
    <div>
    <div className="wrap">
    <Top/>
    <Detail/>
    <Special/>
    <Location/>
    </div>
  </div>
  )
}
export default View;