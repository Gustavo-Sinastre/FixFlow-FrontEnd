// src/routes.tsx
import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from './pages/login/login';
import HomePage from './pages/home/home';
import { AuthContext } from './contexts/authenticate';


function RoutesApp() {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return null;
    }

    const { isAuthenticated } = authContext;
    
    return (
        <Routes>
            <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />} />
            <Route path="*" element={isAuthenticated ? <HomePage /> : <LoginPage />} />     
            <Route path="*" element={<Navigate to="/login" />} />
            
        </Routes>
    );
}

export default RoutesApp;
