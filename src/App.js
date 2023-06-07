import './reset.css';
import './App.css';
import User from './pages/User.js'
import View from './pages/View.js'
import Cal from './pages/Cal.js'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CaregiverInfoPage from './pages/CaregiverInfoPage';

const App = () => {
  return (
      <Routes>
      <Route path='/caregivermain' element={<User/>}/>
      <Route path='/caregivermain/view' element={<View/>}/>
      <Route path='/caregivermain/cal' element={<Cal/>}/>
      <Route path="/main" element={<MainPage />} />
      <Route path="/main/login" element={<LoginPage />} />
      <Route path="/main/signup"/>
      <Route index element={<SignUpPage />} />
      <Route path="/main/writeinfo" element={<CaregiverInfoPage />} />
    </Routes>
  );
};



export default App;