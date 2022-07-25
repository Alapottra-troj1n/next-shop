import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link'



const Navbar = () => {

    const navlinks = <>

        <Link href={'/tshirts'} ><li><a>Tshirts</a></li></Link>
        <Link href={'/tshirts'} ><li><a>Accessories</a></li></Link>
        <Link href={'/tshirts'} ><li><a>Electronics</a></li></Link>
        <Link href={'/tshirts'} ><li><a>Games</a></li></Link>
    </>





    return (
        <div>
            <div className="navbar  container mx-auto">
                <div className="navbar-start bg-base-100 ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link href={'/'}><a className="btn btn-ghost normal-case font-bold text-xl"> <span className="text-emerald-500">NEXT</span>SHOP </a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                       {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <FaShoppingCart className='cursor-pointer text-xl ' ></FaShoppingCart>
                </div>
            </div>
        </div>
    );
};

export default Navbar;