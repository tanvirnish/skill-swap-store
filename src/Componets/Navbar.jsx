// import React from 'react';


// import MyContainer from './MyContainer';
// import { NavLink } from 'react-router';
// import logo from '../assets/logo.png';

// const Navbar = () => {

//     const navLinkClasses = ({ isActive }) =>
//         isActive
//             ? "text-[#f56942] underline pb-1 font-bold"
//             : "";

//     const links = (
//         <>
//             <li>
//                 <NavLink to="/" className={navLinkClasses} >
//                     Home
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/all-skills" className={navLinkClasses}  >
//                     All Skills
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/profile" className={navLinkClasses} >
//                     Profile
//                 </NavLink>
//             </li>
//         </>
//     );




//     return (
//         <MyContainer>
//         <div className="navbar bg-base-100 border-b-2 border-gray-200">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                   
//                             {links}
//                        </ul>
//                 </div>
//                     <a className="flex items-center text-xl font-semibold"><span><img className='h-10 w-10' src={logo} alt="" /></span>Skill <span className='text-[#f56942]'>Swap</span></a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className=" gap-4 menu-horizontal px-1 font-semibold">
//                     {links}
//                 </ul>
//             </div>
//             <div className="navbar-end gap-5 ">
//                     <a className="btn rounded-full text-[#f56942]">Login</a>
//                 <a className="btn rounded-full bg-[#f56942] text-white">Sign Up</a>
//             </div>
//         </div>
//         </MyContainer>
//     );
// };

// export default Navbar;


import React from 'react';
import MyContainer from './MyContainer';
import { NavLink, useNavigate } from 'react-router'; 
import logo from '../assets/logo.png';

const Navbar = () => {
    const navigate = useNavigate(); 

    const navLinkClasses = ({ isActive }) =>
        isActive
            ? "text-[#f56942] underline pb-1 font-bold"
            : "";

    const links = (
        <>
            <li>
                <NavLink to="/" className={navLinkClasses} >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/all-skills" className={navLinkClasses}  >
                    All Skills
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" className={navLinkClasses} >
                    Profile
                </NavLink>
            </li>
        </>
    );

    return (
        <MyContainer>
            <div className="navbar bg-base-100 border-b-2 border-gray-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="flex items-center text-xl font-semibold">
                        <span><img className='h-10 w-10' src={logo} alt="" /></span>
                        Skill <span className='text-[#f56942]'>Swap</span>
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className=" gap-4 menu-horizontal px-1 font-semibold">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-5 ">
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
                </div>
            </div>
        </MyContainer>
    );
};

export default Navbar;
