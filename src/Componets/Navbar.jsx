import React, { useState } from 'react';
import MyContainer from './MyContainer';
import { NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.png';
import { useAuth } from '../AuthProvider/AuthContext';
import { toast } from 'react-toastify';


const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [showProfileInfo, setShowProfileInfo] = useState(false);

    const navLinkClasses = ({ isActive }) =>
        isActive ? "text-[#f56942] underline pb-1 font-bold" : "";


    const links = (
        <>
            <li>
                <NavLink to="/" className={navLinkClasses}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/all-skills" className={navLinkClasses}>
                    All Skills
                </NavLink>
            </li>

           
            {user && (
                <li>
                    <NavLink to="/resources" className={navLinkClasses}>
                        Resources
                    </NavLink>
                </li>
            )}

            
            {user && (
                <li>
                    <NavLink to="/profile" className={navLinkClasses}>
                        Profile
                    </NavLink>
                </li>
            )}
        </>
    );

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login", { replace: true });
        } catch (err) {
            toast.error.error(err.message);
        }
    };

    return (
        <MyContainer>
            <div className="navbar bg-base-100 border-b-2 border-gray-200 relative">
               
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="flex items-center text-xl font-semibold cursor-pointer">
                        <img className='h-10 w-10' src={logo} alt="" />
                        <span className="ml-1">Skill <span className='text-[#f56942]'>Swap</span></span>
                    </a>
                </div>

           
                <div className="navbar-center hidden lg:flex">
                    <ul className="gap-4 menu-horizontal px-1 font-semibold">
                        {links}
                    </ul>
                </div>

              
                <div className="navbar-end gap-3 flex items-center">
                    {user ? (
                        <>
                           
                            <div
                                className="relative"
                                onMouseEnter={() => setShowProfileInfo(true)}
                                onMouseLeave={() => setShowProfileInfo(false)}
                            >
                                <img
                                    src={user.photoURL || 'https://via.placeholder.com/40'}
                                    alt={user.displayName || "User"}
                                    className="h-10 w-10 rounded-full border-2 border-[#f56942] cursor-pointer"
                                    onClick={() => navigate("/profile")}
                                />
                                {showProfileInfo && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 text-gray-800 z-50">
                                        <p className="font-semibold">{user.displayName || "No Name"}</p>
                                        <p className="text-sm truncate">{user.email}</p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleLogout}
                                className="btn rounded-full bg-[#f56942] text-white"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate("/login")}
                                className="btn rounded-full text-[#f56942]"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate("/signup")}
                                className="btn rounded-full bg-[#f56942] text-white"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </MyContainer>
    );
};

export default Navbar;


