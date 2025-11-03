import React from 'react';

const CreateProduct = () => {
    const handelSubmit = e => {
        e.preventDefault();
        const f = e.target;
        const title = f.title.value;
        const location = f.location.value;
        const sellerImage = f.sellerImage.value;
        const contact = f.contact.value;
        const sellerEmail = f.sellerEmail.value;
        const sellerName = f.sellerName.value;
        const productUrl = f.productUrl.value;
        const productUsageTime = f.productUsageTime.value;
        const condition = f.condition.value;
        const maxPrice = f.maxPrice.value;
        const minPrice = f.minPrice.value;
        const category = f.category.value;
        const description = f.description.value;
        const newProduct = { title, location, seller_image: sellerImage, seller_contact: contact, email: sellerEmail, seller_name: sellerName, image: productUrl, productUsageTime, condition, price_min: maxPrice, price_max: minPrice, category: category, description: description };

        fetch('http://localhost:3000/products', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("data after added database", data);
            })
    }
    return (
        <div>
            <h3 className="font-bold text-2xl mb-6 text-center">Create <span className='gradient bg-clip-text text-transparent'>a Product</span></h3>
            <div className=" max-w-3xl mx-auto p-8 shadow-sm bg-base-100">

                <form onSubmit={handelSubmit}>
                    <fieldset className="fieldset">

                        <div className='flex items-center gap-7 w-full'>
                            {/* product title  */}
                            <div className='flex-1'>
                                <label className="label font-medium text-black mb-1">Title</label>
                                <input type="text" className="input"
                                    name='title'
                                    placeholder='e.g. Yamaha Fz Guitar for Sale' />
                            </div>
                            {/* product category  */}
                            <div className='flex-1'>
                                <label className="label font-medium text-black mb-1">Category</label>
                                <input type="text" name='category' className="input" placeholder='Select a Category ' />
                            </div>
                        </div>
                        <div className='flex items-center gap-7 w-full'>
                            {/* Min Price */}
                            <div className='flex flex-col flex-1'>
                                <label className="label font-medium text-black mb-1">Min Price You want to Sale ($)</label>
                                <input type="text" name='minPrice' className="input " placeholder='$50' />
                            </div>
                            {/* maximum price  */}
                            <div className='flex flex-col flex-1'>
                                <label className="label font-medium text-black mb-1">Max Price You want to Sale ($)</label>
                                <input type="text" className="input w-full" name='maxPrice' placeholder="max price" />
                            </div>
                        </div>
                        <div className='flex items-center gap-7'>
                            {/* Product Condition */}
                            <div className='flex flex-col flex-1'>
                                <label className="label font-medium text-black mb-1">Product Condition</label>
                                <input type="text" className="input w-full" name='condition' placeholder="Product Condition" />
                            </div>
                            {/* Product Usage time */}
                            <div className='flex flex-col flex-1'>
                                <label className="label font-medium text-black mb-1">Product Usage time</label>
                                <input type="text" name='productUsageTime' className="input w-full" placeholder="1-3 month" />
                            </div>

                        </div>
                        {/* image url  */}
                        <div className='flex flex-col flex-1'>
                            <label className="label font-medium text-black mb-1">Your Product Image URL</label>
                            <input type="text" name='productUrl' className="input w-full" placeholder="https://" />
                        </div>

                        <div className='flex items-center gap-7'>
                            {/* Seller Name */}
                            <div className='flex flex-col flex-1'>
                                <label className="label font-medium text-black mb-1">Seller Name</label>
                                <input type="text" className="input w-full" name='sellerName' placeholder="Seller Name" />
                            </div>
                            {/* Seller Email */}
                            <div className='flex flex-col flex-1'>
                                <label className="label font-medium text-black mb-1">Seller Email</label>
                                <input type="email" name='sellerEmail' className="input w-full" placeholder="Seller Email" />
                            </div>

                        </div>
                        <div className='flex items-center gap-7'>
                            {/* Seller Contact*/}
                            <div className='flex flex-col flex-1'>
                                <label className="label font-medium text-black mb-1">Seller Contact</label>
                                <input type="text" className="input w-full" name='contact' placeholder="Seller Contact" />
                            </div>
                            {/* Seller image */}
                            <div className='flex flex-col flex-1'>
                                <label className="label font-medium text-black mb-1">Seller image url</label>
                                <input type="text" name='sellerImage' className="input w-full" placeholder="https://" />
                            </div>

                        </div>
                        {/* location  */}
                        <div className='flex flex-col flex-1'>
                            <label className="label font-medium text-black mb-1">Location</label>
                            <input type="text" name='location' className="input w-full" placeholder="Location" />
                        </div>
                        {/* description  */}
                        <div className='flex flex-col flex-1'>
                            <label className="label font-medium text-black mb-1">description</label>
                            <textarea name="description" rows={5} className='border border-gray-300 rounded-lg w-full '></textarea>
                        </div>



                        <button type='submit' className="btn gradient text-white mt-4">Create a Product</button>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;