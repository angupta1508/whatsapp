import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { io } from 'socket.io-client';
import Login from "./pages/Login.jsx";
import Register from './pages/Register.jsx';
import Start from './components/Start.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/chat" element={<Header />} />
        <Route exact path="/" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
