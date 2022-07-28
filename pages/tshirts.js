import React from 'react';
import Product from '../components/Product';

const Tshirts = () => {
    return (
        <div className="pt-32 container mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
                <Product imgSrc={'/teeshirt.jpg'} />
                <Product imgSrc={'/teeshirt.jpg'} />
                <Product imgSrc={'/teeshirt.jpg'} />

                <Product imgSrc={'/teeshirt.jpg'} />
                <Product imgSrc={'/teeshirt.jpg'} />
                <Product imgSrc={'/teeshirt.jpg'} />


            </div>
            
        </div>
    );
};

export default Tshirts;