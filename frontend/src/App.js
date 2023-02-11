import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NGO from './pages/Ngo_Dashboard/NGO';
import User_First from './pages/User_First/User_First';
import User_Settings from './pages/User_Settings/User_Settings';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ngo" element={<NGO />} />
        <Route path="/user_new" element={<User_First />} />
        <Route path="/user_set" element={<User_Settings />} />
        
    </Routes>
  );
}

export default App;
