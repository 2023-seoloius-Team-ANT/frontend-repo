import './user.css';
import Header from '../component/header.js'
import Application from '../component/application.js'
import Request from '../component/request.js'
import Top from '../component/top.js'
import { useState } from 'react';


function User() {
  const [Isrender, goRender] = useState(false);
  const changeState = ()=>{
    goRender(!Isrender);
    console.log(Isrender)
  }

  return (
    <div className="wrap">
       <Top/>
      <Header/>
      <Request goRender={changeState} rederVal={Isrender}/>
      <Application goRender={changeState} rederVal={Isrender}/>  
  </div>
  );
}
export default User;