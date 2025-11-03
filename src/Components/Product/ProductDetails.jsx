import React, { use, useEffect, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContex } from '../../Auth/AuthContex';
import Swal from 'sweetalert2';
import Loader from '../Loader/Loader';

const ProductDetails = () => {
    const [bids, setBids] = useState([])
    const product = useLoaderData();
    const { price_max, price_min, title, image, _id, description, created_at, seller_image, seller_name, seller_contact, email, status } = product;
    const { user } = use(AuthContex)
    useEffect(() => {
        fetch(`http://localhost:3000/productbids/${_id}`)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [_id])


    const bidModalRef = useRef(null);


    const showBidModal = () => {
        bidModalRef.current.showModal()
    }



    const handelSubmit = e => {
        e.preventDefault();
        const bidPrice = e.target.bidPrice.value;
        const contact = e.target.contact.value;
        console.log({ bidPrice, contact });
        const newBid = {
            product: _id,
            title: user?.title,
            buyer_name: user?.displayName,
            buyer_email: user?.email,
            bid_price: bidPrice,
            location: user?.location,
            image: user?.image,
            status: 'pending'
        }
        fetch("http://localhost:3000/bids", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    bidModalRef.current.close();
                    newBid._id = data.insertedId;

                    setBids([...bids, newBid].sort((a, b) => b.bid_price - a.bid_price))

                    Swal.fire({
                        text: "You Bid has been placed",
                        icon: "success"
                    }


                    );
                }
            })
    }

    if (!user || !bids) {
        return <Loader />
    }
    return (
        <div >

            <div className='flex justify-center gap-8'>
                <div className='flex-1'>
                    <div className="">
                        <figure>
                            <img
                                src={image} className='rounded-2xl w-full' />
                        </figure>
                        <div>
                            <div className="card bg-base-100  shadow-sm border border-gray-300 p-4 mt-7">
                                <h2 className='text-2xl font-semibold mb-10 '>Product Description</h2>
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
                <div className='flex-1'>
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
                    <div className='card bg-base-100  shadow-sm border border-gray-300 p-4 my-7'>
                        <h2 className=' font-bold text-2xl mb-5'>Seller Information</h2>
                        <div className='flex items-center gap-3 mb-4'>
                            <div>
                                <img src={seller_image} className='w-14 h-14 rounded-full' />
                            </div>
                            <div>
                                <p className='font-semibold'>{seller_name}</p>
                                <p className='text-sm'>crafts.by.{email}</p>
                            </div>

                        </div>

                        <div>
                            <p><span className='font-medium'>Location: </span> {seller_name} Shop</p>
                            <p><span className='font-medium'>Contact:</span> {seller_contact}</p>
                        </div>

                        <div className='flex items-center gap-4 mt-4'>
                            <p className='font-medium'>status: </p><span className='py-1 px-4 rounded-full bg-amber-200'>{status}</span>
                        </div>
                        <button
                            onClick={showBidModal}
                            className='gradient text-white w-full md:py-4 mt-5 rounded-lg'>I want Buy This Product</button>
                    </div>
                </div>
            </div>

            {/* bids of this product  */}

            <div className='mt-24'>
                <h2 className='text-5xl font-bold'> Bids For This Products: <span className='gradient bg-clip-text text-transparent'>{bids.length}</span></h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-lg font-medium'> SL No </th>
                                <th className='text-lg font-medium'>Product</th>
                                <th className='text-lg font-medium'>Bayer </th>
                                <th className='text-lg font-medium'>Bid Price</th>
                                <th className='text-lg font-medium'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bids.map((bid, i) => <tr>
                                    <th> {i + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={bid.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{bid?.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={bid?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{bid?.buyer_name}</div>
                                                <div className="text-sm opacity-50">{bid?.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {bid?.bid_price}
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog
                ref={bidModalRef}
                className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">



                    <h3 className="font-bold text-2xl mb-6 text-center">Give Seller Your Offered Price</h3>

                    <form onSubmit={handelSubmit}>
                        <fieldset className="fieldset">

                            <div className='flex items-center gap-7'>
                                <div>
                                    <label className="label font-medium text-black mb-1">Buyer Name</label>
                                    <input type="text" className="input" readOnly defaultValue={user.displayName} />
                                </div>
                                <div>
                                    <label className="label font-medium text-black mb-1">Buyer Email</label>
                                    <input type="email" className="input" readOnly defaultValue={user.email} />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label className="label font-medium text-black mb-1">Buyer Image URL</label>
                                <input type="text" className="input w-full" readOnly defaultValue={user.photoURL
                                } />
                            </div>
                            <div className='flex flex-col'>
                                <label className="label font-medium text-black mb-1">Place your Price</label>
                                <input type="number" className="input w-full" name='bidPrice' placeholder="Place your Price" />
                            </div>
                            <div className='flex flex-col'>
                                <label className="label font-medium text-black mb-1">Contact Info</label>
                                <input type="number" name='contact' className="input w-full" placeholder="+1-555-1234" />
                            </div>

                            <div className='flex items-center gap-5 justify-end'>
                                <button onClick={() => bidModalRef.current.close()} type='button' className="btn gradient bg-clip-text text-transparent border border-[#9F62F2] mt-4">Cencel</button>
                                <button type='submit' className="btn gradient text-white mt-4">Submit Bid</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ProductDetails;