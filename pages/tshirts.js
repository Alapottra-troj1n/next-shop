import React from 'react';
import Product from '../components/Product';

const Tshirts = () => {
    return (
        <div className="my-28 container mx-auto">

            <div className="grid grid-cols-3 gap-10">
                <Product/>
                <Product/>
                <Product/>

                <Product/>
                <Product/>
                <Product/>


            </div>
            
        </div>
    );
};

export default Tshirts;