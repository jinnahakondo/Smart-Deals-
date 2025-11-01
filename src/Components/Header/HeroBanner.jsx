import React from 'react';
import heroLImg from '../../assets/bg-hero-left.png';
import heroRImg from '../../assets/bg-hero-right.png'

const HeroBanner = () => {
    return (
        <div className='relative bg-gradient-to-r from-[#FFE6FD] to-[#E0F8F5] rounded-2xl '>

            <div className='flex justify-between items-center '>
                <img src={heroLImg} />
                <img src={heroRImg} />
            </div>
            <div className='absolute  top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-center'>
                <h2 className='text-2xl lg:text-7xl font-extrabold text-center'>Deal your <span className='gradient bg-clip-text text-transparent'>Products</span> <br />
                    in a <span className='gradient bg-clip-text text-transparent'>Smart</span> way !</h2>
                <p className='mt-5'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>


                <div className='my-7'>
                    <label className="input rounded-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <button className='gradient text-white px-6 py-3'>Watch Products</button>
                    <button className='gradient bg-clip-text text-transparent border border-[#632EE3] font-bold px-6 py-3'>Post Products</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;