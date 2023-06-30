import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Products from './Components/Products';
import Publications from './Components/Publication';
import Contactus from './Components/Contactus';
import Team from './Components/Team';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
      <Route index element={<Home />} />
              <Route path="Aboutus" element={<Aboutus />} />
              <Route path="Products" element={<Products />} />
              <Route path="Publications" element={<Publications />} />
              <Route path="Team" element={<Team />} />
              <Route path="Contactus" element={<Contactus />} />
    
      </Routes>
    </Router>
  );
};

export default App;
