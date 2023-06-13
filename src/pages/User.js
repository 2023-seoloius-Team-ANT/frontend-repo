import './user.css';
import Header from '../component/header.js'
import Application from '../component/application.js'
import Request from '../component/request.js'
import Top from '../component/top.js'
import { useState } from 'react';


function User() {

  return (
    <div className="wrap">
       <Top/>
      <Header/>
      <Request/>
      <Application/>  
  </div>
  );
}
export default User;