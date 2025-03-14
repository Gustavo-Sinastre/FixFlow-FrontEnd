// src/routes.tsx
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login/login';
import HomePage from './pages/home/home';
import { AuthContext } from './contexts/authenticate';
import RegisterPage from './pages/register/register';


function RoutesApp() {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return null;
    }

    const { isAuthenticated } = authContext;
    
    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />} />
            <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/register" element={isAuthenticated ? <RegisterPage /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default RoutesApp;
