import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContex } from '../../Auth/AuthContex';

const NavBar = () => {
    const { user, logout } = use(AuthContex)

    const links = <>
        <li className='font-medium'><Link to={'/'}>Home</Link></li>
        <li className='font-medium'><Link to={'/all-products'}>All Products</Link></li>
        {
            user && <>
                <li className='font-medium'><Link to={'/my-products'}>My Products</Link></li>
                <li className='font-medium'><Link to={'/my-bids'}>My Bids</Link></li>
                <li className='font-medium'><Link to={'/create-procuct'}>Create Product</Link></li>
            </>
        }
    </>

    // logOUt 
    const handelLogOut = () => {
        logout()
            .then(() => {
                console.log("sign Out successfull");

            })
            .catch(error => console.log(error.code))
        console.log("clicked");
    }

    return (
        <div className=" bg-base-100 shadow-sm px-20">
            <div className='max-w-11/12 mx-auto navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl font-bold">Smart <span className=' gradient bg-clip-text text-transparent'> Deals </span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handelLogOut} className="btn gradient text-white px-7 font-medium">Log Out</button>
                            :
                            <Link to={'/auth'} className="btn gradient text-white px-7 font-medium">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;