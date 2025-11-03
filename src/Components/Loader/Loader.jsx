import React from 'react';
import { GridLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='grid place-items-center h-screen'>
            <GridLoader />
        </div>
    );
};

export default Loader;