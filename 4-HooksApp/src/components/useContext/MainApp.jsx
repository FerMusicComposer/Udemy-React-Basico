import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { LoginPage, AboutPage, HomePage } from './index';
import { UserProvider } from './context';
import Navbar from './Navbar';
const MainApp = () => {
    return (
        <UserProvider>
            <div className="spaApp">
                <h1 className="spaHeader">Main App</h1>
                <Navbar />
                {/* <div className="spaNavbar">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="about">
                    <button>About</button>
                </Link>
                <Link to="login">
                    <button>Login</button>
                </Link>
            </div> */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Routes>
            </div>
        </UserProvider>
    );
};

export default MainApp;
