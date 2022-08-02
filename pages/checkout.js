import React from 'react';

const Checkout = () => {
    return (
        <div className="py-32">
            <h2 className="text-center font-bold text-3xl" >Checkout</h2>
            <div>
                <section className="text-gray-600 body-font overflow-hidden">

                    
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 grid grid-cols-[90%,30%]">
                            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>

                                <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-gray-500">Color</span>
                                    <span className="ml-auto text-gray-900">Blue</span>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-gray-500">Size</span>
                                    <span className="ml-auto text-gray-900">Medium</span>
                                </div>
                                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <span className="text-gray-500">Quantity</span>
                                    <span className="ml-auto text-gray-900">4</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>

                                    <form className="my-20 flex justify-center items-center flex-col gap-5">
                                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-2xl" />
                                        <input type="text" placeholder="Current Address" className="input input-bordered w-full max-w-2xl" />
                                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-2xl" />
                                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-2xl" />
                                        <input type="submit" value="Confirm Payment" className="btn px-5"/>
                                    </form>
                                </div>
                            </div>
                           
                            <img alt="ecommerce" className=" w-full lg:h-auto h-64 object-cover object-center rounded" src="/teeshirt.jpg" />
                         
                        </div>
                    </div>



                </section>




            </div>


        </div>
    );
};

export default Checkout;