import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/auth/Login';

const AppRouter: React.FC = () => {
    return (

        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>

    );
};

export default AppRouter;
