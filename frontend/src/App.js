import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NGO from './pages/Ngo_Dashboard/NGO';
import User_First from './pages/User_First/User_First';
import User_Settings from './pages/User_Settings/User_Settings';import NGO_Profile from './pages/NGO_Profile/NGO_Profile';
import LoginSignUp from './pages/LoginSIgnUp/LoginSignUp';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/ngo/:pg_no" element={<NGO />} />
        <Route path="/ngo/profile/:pg_no" element={<NGO_Profile />} />
        <Route path="/user_new" element={<User_First />} />
        <Route path="/user_set" element={<User_Settings />} />


        
    </Routes>
  );
}

export default App;
