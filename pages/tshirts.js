import React from 'react';
import Product from '../components/Product';

const Tshirts = ({data}) => {
    console.log(data);
    return (
        <div className="pt-32 container mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">

                {data.map(product => <Product key={product._id} imgSrc={`${product.img}`} product={product} />) }


            </div>
            
        </div>
    );
};

export async function getServerSideProps(context) {

        const res = await fetch('http://localhost:3000/api/getproducts');
        const data = await res.json();

    return {
      props: {data: data}, 
    }
  }

export default Tshirts;