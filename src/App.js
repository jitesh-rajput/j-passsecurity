import LoginPage from './Login/LoginPage';
import HomePage from './Home/HomePage';
import Regestration from './Regestration/RegestrationPage';
import MainPage from './Main/MainPage';
import TwoFactor from './Regestration/TwoFactor';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<Regestration/>}/>
        <Route path="/home/*" element={<MainPage/>} />
        <Route path="/2factor" element={<TwoFactor/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
