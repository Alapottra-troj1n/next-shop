import mongoose from 'mongoose';
import React from 'react';
import Product from '../components/Product';
import connectDb from '../middleware/mongoose';
import Products from "../models/Products";

const Tshirts = ({data}) => {
 
    return (
        <div className="pt-32 container mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">

                {data.map(product => <Product key={product._id} imgSrc={`${product.img}`} product={product} />) }


            </div>
            
        </div>
    );
};

export async function getServerSideProps(context) {

        

        await connectDb();

        let products = await Products.find();

        





    return {
      props: { data : JSON.parse(JSON.stringify(products))} 
    }
  }

export default Tshirts;