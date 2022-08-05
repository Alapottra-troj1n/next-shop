import Products from "../../models/products";
import connectDb from "../../middleware/mongoose";


export default async function handler (req,res){

    await connectDb();
    let products = await Products.find();


    res.status(200).json( products );

}






  