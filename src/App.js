import './reset.css';
import './App.css';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
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
      <Route path='/view' element={<View/>}/>
      <Route path='/cal' element={<Cal/>}/>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup">
        <Route index element={<SignUpPage />} />
        <Route path="writeinfo" element={<CaregiverInfoPage />} />
      </Route>
    </Routes>
  );
};



export default App;
