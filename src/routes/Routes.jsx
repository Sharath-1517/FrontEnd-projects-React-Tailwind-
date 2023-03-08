import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../component/Home';
import QR from '../component/qr-code/QR';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/qr-code-challenge" element={<QR />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;
