import './user.css';
import Header from '../component/header.js'
import Application from '../component/application.js'
import Request from '../component/request.js'
import Top from '../component/top.js'
import { useState } from 'react';


function User() {
  const [goren, startRander] = useState(false);

  return (
    <div className="wrap">
       <Top/>
      <Header/>
      <Request goren={goren}/>
      <Application goren={goren} startRander={startRander}/>  
  </div>
  );
}
export default User;