import React, { use } from 'react';
import { AuthContex } from '../Auth/AuthContex';

const PrivateRoutes = ({ children }) => {
    const { user } = use(AuthContex);
    if (user) {
        return <>
            {children}
        </>
    }

};

export default PrivateRoutes;