import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
    const { price_max, price_min, title, image,_id } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border border-gray-300 p-4">
                <figure>
                    <img
                        src={image} />
                </figure>
                <div className="space-y-1">
                    <h2 className="text-2xl font-medium ">{title}</h2>
                    <p className='gradient bg-clip-text text-transparent text-base font-bold'>${price_min}-{price_max}</p>
                    <Link to={`/procuct/details/${_id}`} className="btn gradient text-white w-full mt-2">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;