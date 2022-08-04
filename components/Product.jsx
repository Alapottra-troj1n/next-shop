import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = ({imgSrc,product}) => {
    console.log(imgSrc);
    return (
   <Link href={`product/${product.slug}`}>
         <div className="flex justify-center items-center cursor-pointer">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="relative h-96 w-64 mx-auto"><Image src={imgSrc} layout='fill' objectFit='cover' alt="Shoes" /></div>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.title}
                        <div className="badge bg-emerald-500 border-0">NEW</div>
                    </h2>
                    <p>{product.desc.slice(0,50)}...</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Quantity: {product.availableQty}</div>
                        <div className="badge badge-outline">{product.size}</div>
                    </div>
                </div>
            </div>
        </div>
   </Link>
    );
};

export default Product;