import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import CaregiverJoin from './pages/CaregiverJoin';
import SeniorJoin from './pages/SeniorJoin';
import CaregiverInfo from './pages/CaregiverInfo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/register">
        <Route path="caregiver">
          <Route index element={<CaregiverJoin />} />
          <Route path="info" element={<CaregiverInfo />} />
        </Route>
        <Route path="senior" element={<SeniorJoin />} />
      </Route>
    </Routes>
  );
};

export default App;
