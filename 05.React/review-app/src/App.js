import './App.css';
import React from 'react';
import Main from './pages/Main';
import Product from './pages/Product';
import Parents from './pages/Parents';
import Calculate from './pages/Calculate'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/parents" element={<Parents />}></Route>
        <Route path="/calculate" element={<Calculate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
