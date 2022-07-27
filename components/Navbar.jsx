import React, { useRef } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import Link from 'next/link'



const Navbar = () => {

    const navlinks = <>

        <Link href={'/tshirts'} ><li><a>Tshirts</a></li></Link>
        <Link href={'/tshirts'} ><li><a>Accessories</a></li></Link>
        <Link href={'/tshirts'} ><li><a>Electronics</a></li></Link>
        <Link href={'/tshirts'} ><li><a>Games</a></li></Link>
    </>




        const toggleCart = () => {
            if(ref.current.classList.contains('translate-x-full')){
                ref.current.classList.remove('translate-x-full')
                ref.current.classList.add('translate-x-0')
            }else if(!ref.current.classList.contains('translate-x-full')){
                ref.current.classList.add('translate-x-full')
                ref.current.classList.remove('translate-x-0')
            }

        }

        const ref = useRef();




    return (
        <div>
            <div className="navbar fixed bg-base-100  mx-auto z-10">
                <div className="navbar-start container ">
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
                <FaShoppingCart className='cursor-pointer text-xl ' onClick={()=> toggleCart()} ></FaShoppingCart>
                </div>
            </div>



            <div ref={ref} className="sideCart h-full w-72 bg-slate-500 fixed top-0 right-0 z-20 p-5 text-white translate-x-full transition">
                    <h2 className="text-xl font-bold text-center my-5">Your Cart</h2>

                    <ol className="list-decimal">
                        <div className='flex justify-center items-center gap-5'>
                                    <div>
                                            <h2>Red Nikey Hoddie</h2>
                                    </div>

                                    <div className='flex justify-center items-center text-md'>
                                    <AiFillPlusCircle className='cursor-pointer' />   <span className='mx-2' >2</span> <AiFillMinusCircle className='cursor-pointer' />
                                    </div>
                        </div>

                        

                       <div className='flex justify-center items-center mt-20'>
                       <button className='btn'>Checkout</button>
                       </div>

                    </ol>
                    

                    <AiFillCloseCircle onClick={ ()=> toggleCart()} className="fixed top-2 right-2 cursor-pointer" />
                    
            </div>

        </div>
    );
};

export default Navbar;