import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-base-200'>
            <header>
                <NavBar />
            </header>
            <main className='py-20 max-w-11/12 mx-auto'>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;