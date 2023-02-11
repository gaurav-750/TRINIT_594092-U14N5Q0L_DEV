import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NGO from './pages/Ngo_Dashboard/NGO';
import NGO_Profile from './pages/NGO_Profile/NGO_Profile';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ngo/:pg_no" element={<NGO />} />
        <Route path="/ngo/profile/:pg_no" element={<NGO_Profile />} />
    </Routes>
  );
}

export default App;
