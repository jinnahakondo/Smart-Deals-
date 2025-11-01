import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../Components/Header/NavBar';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main className='px-[100px] h-[96vh] flex justify-center items-center max-w-11/12 mx-auto'>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;