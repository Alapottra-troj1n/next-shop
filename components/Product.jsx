import Image from 'next/image';
import React from 'react';

const Product = ({imgSrc}) => {
    console.log(imgSrc);
    return (
        <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><Image height="650" width="500" src={imgSrc} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Product Name
                        <div className="badge bg-emerald-500 border-0">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;