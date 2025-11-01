import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    const { price_max, price_min, title, image, _id, description, created_at } = product;
    return (
        <div className='flex justify-center gap-8'>
            <div>
                <div className="">
                    <figure>
                        <img
                            src={image} className='rounded-2xl' />
                    </figure>
                    <div>
                        <div className="card bg-base-100  shadow-sm border border-gray-300 p-4 mt-7">
                            <h2 className='text-2xl font-semibold mb-5 '>Product Description</h2>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold'><span className='gradient bg-clip-text text-transparent '>Condition</span> :  New</p>
                                <p className='font-semibold'><span className='gradient bg-clip-text text-transparent '>Usage Time </span> :  3 Month</p>
                            </div>
                            <div className='bg-gray-300 h-0.5 my-3 w-full'></div>
                            <p className='text-gray-600'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* right div  */}
            <div>
                <Link>Back to Products</Link>
                <h2 className='text-5xl font-bold my-4'>{title} For Sale</h2>
                <a className=' font-bold py-1 px-3 rounded-full bg-[#c1b9ce]'> <span className='text-[#632EE3]'>Art and Hobbies</span></a>
                <div className='card bg-base-100  shadow-sm border border-gray-300 p-4 my-7'>
                    <p className='text-green-500 font-bold text-3xl mt-2'>${price_min}-{price_max}</p>
                    <p>Price starts from </p>
                </div>
                <div className='card bg-base-100  shadow-sm border border-gray-300 p-4 my-7'>
                    <p className=' font-bold text-2xl mt-2'>Product Details</p>
                    <p><span className='font-medium'>Product id:</span> {_id}</p>
                    <p><span className='font-medium'>Product id:</span> {created_at}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;