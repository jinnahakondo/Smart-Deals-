import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Latest_Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/latest-products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-12'>Recent <span className='gradient bg-clip-text text-transparent '>Products</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {products.map(product => <Product key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export default Latest_Products;