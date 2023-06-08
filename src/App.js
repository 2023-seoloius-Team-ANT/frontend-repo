// import './reset.css';
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
    <Route path="/" element={<MainPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup">
      <Route index element={<SignUpPage />} />
      <Route path="writeinfo" element={<CaregiverInfoPage />} />
    </Route>
    <Route path='/caregivermain' element={<User/>}/>
    <Route path='/caregivermain/view' element={<View/>}/>
    <Route path='/caregivermain/cal' element={<Cal/>}/>

</Routes>
  );
};



export default App;