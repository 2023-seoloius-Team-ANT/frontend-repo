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
    </Routes>
  );
};

export default App;
