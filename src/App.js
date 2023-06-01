import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import CaregiverInfo from './pages/CaregiverInfo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup">
        <Route index element={<SignUp />} />
        <Route path="writeinfo" element={<CaregiverInfo />} />
      </Route>
    </Routes>
  );
};

export default App;
