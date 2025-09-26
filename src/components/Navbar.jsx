import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <a>
                        <h2 className='font-bold text-lg'>CS — Ticket System</h2>
                    </a>
                </div>
                <div className="navbar-end">

                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="">
                    <button className="btn rounded-lg text-white font-semibold bg-gradient-to-br from-[#632ee3] to-[#9f62f2]">+ New Ticket</button>
                </div>
                </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;