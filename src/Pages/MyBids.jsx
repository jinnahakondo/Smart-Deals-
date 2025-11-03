import React, { use, useEffect, useState } from 'react';
import { AuthContex } from '../Auth/AuthContex';
import Swal from 'sweetalert2';

const MyBids = () => {
    const { user } = use(AuthContex)
    const [bids, setBids] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/bids?email=${user.email}`)
                .then(res => res.json())
                .then(data => setBids(data))
        }
    }, [user])

    const handelBidDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bids/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after delete:', data);
                    })
                setBids(bids.filter(bid => bid._id !== id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your bid has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div>


            <div className='mt-24'>
                <h2 className='text-5xl font-bold text-center'> My Bids:  <span className='gradient bg-clip-text text-transparent'>{bids?.length}</span></h2>
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
                                bids?.map((bid, i) => <tr>
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
                                        <button
                                            onClick={() => handelBidDelete(bid._id)}
                                            className="btn btn-outline btn-xs">delete</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
};

export default MyBids;