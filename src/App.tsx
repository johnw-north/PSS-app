import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Donate from './pages/Donate';
import Market from './pages/Market/Market';
import Favourite from './pages/Favourite';
import DollHouse from './pages/DollHouse';
import Guide from './pages/Guide';
import Ledger from './pages/Ledger';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="bg-main">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/donate" element={<Donate/>} />
              <Route path="/market" element={<Market/>} />
              <Route path="/favourite" element={<Favourite/>} />
              <Route path="/dollhouse" element={<DollHouse/>} />
              <Route path="/guide" element={<Guide/>} />
              <Route path="/ledger" element={<Ledger/>} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
