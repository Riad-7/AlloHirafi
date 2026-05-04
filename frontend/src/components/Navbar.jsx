import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <NavLink className="navbar-brand text-light" to={'/'}>AlloHirafi</NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link text-light  " + (isActive ? "text-decoration-underline" : "")} to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link text-light " + (isActive ? "text-decoration-underline" : "")} to={'/login'}>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link text-light " + (isActive ? "text-decoration-underline" : "")} to={'/register'}>Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;