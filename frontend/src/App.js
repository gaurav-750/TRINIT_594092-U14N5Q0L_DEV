import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NGO from './pages/Ngo_Dashboard/NGO';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ngo" element={<NGO />} />
    </Routes>
  );
}

export default App;
