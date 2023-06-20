import './App.css';
import User from './pages/User.js';
import View from './pages/View.js';
import Cal from './pages/Cal.js';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CaregiverInfoPage from './pages/CaregiverInfoPage';
import FindHelperPage from './pages/FindHelper/FindHelperPage';
import HelperProfilePage from './pages/HelperProfile/HelperProfilePage';
import HelperDetailProfilePage from './pages/HelperDetailProfile/HelperDetailProfilePage';
import CaregiverMyPage from './pages/CaregiverMyPage';
import LinkedExample from './pages/AdminDetail/AdminDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup">
        <Route index element={<SignUpPage />} />
        <Route path="writeinfo" element={<CaregiverInfoPage />} />
      </Route>
      <Route path="/findHelper" element={<FindHelperPage />} />
      <Route path="/helperProfilePage" element={<HelperProfilePage />} />
      <Route
        path="/HelperDetailProfilePage"
        element={<HelperDetailProfilePage />}
      />

      <Route path="/caregivermain" element={<User />} />
      <Route
        path="/caregivermain/caregivermypage"
        element={<CaregiverMyPage />}
      />
      <Route path="/caregivermain/view" element={<View />} />
      <Route path="/caregivermain/cal" element={<Cal />} />

      <Route path="/admindetail/list" element={<LinkedExample />} />
    </Routes>
  );
};

export default App;
