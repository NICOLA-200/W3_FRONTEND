// src/App.tsx
import React from 'react';
import AdminLogin from './pages/AdminLogin';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function App() {

  const  auth  = useAuth()
  return (
    <div className="bg-neutral-400 w-screen h-screen flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          {/* Define a route for the AdminLogin component */}
          {/* <Route path="/" element={<AdminLogin />} /> */}
          {/* <Route path="/" element={<RegisterPage />} /> */}
          <Route path='/dashboard' element={auth.isAuthenticated ? <Dashboard /> : <AdminLogin/>} />
          <Route path='/' element={<RegisterPage/>} />
          <Route path='/adminLogin' element={<AdminLogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
