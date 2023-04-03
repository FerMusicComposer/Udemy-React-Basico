import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="spaNavbar">
                <NavLink className={({ isActive }) => `${isActive ? 'spaNavbarBtnActive' : ''}`} to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => `${isActive ? 'spaNavbarBtnActive' : ''}`} to="about">
                    About
                </NavLink>
                <NavLink className={({ isActive }) => `${isActive ? 'spaNavbarBtnActive' : ''}`} to="login">
                    Login
                </NavLink>
            </div>
        </>
    );
};

export default Navbar;
