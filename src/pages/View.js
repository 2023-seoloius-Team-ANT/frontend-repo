import './view.css';
import Top from '../component/top.js'
import Detail from '../component/detail.js'
import Special from '../component/special.js'
import Location from '../component/location.js'
import { useLocation } from '../../node_modules/react-router-dom/dist/index';
import { useEffect } from 'react';

function View(){
  const location=useLocation();
  const sch= location.search;
  const params=new URLSearchParams(sch);
  const keyword=params.get('seniorno');

  return(
    <div>
    <div className="wrap">
    <Top/>
    <Detail no={keyword}/>
    <Special no={keyword}/>
    <Location no={keyword}/>
    </div>
  </div>
  )
}
export default View;