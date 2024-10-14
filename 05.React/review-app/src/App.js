import './App.css';
import React from 'react';
import Main from './pages/Main';
import Product from './pages/Product';
import Parents from './pages/Parents';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="parents" element={<Parents />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
