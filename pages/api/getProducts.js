import Products from "../../models/products";
import connectDb from "../../middleware/mongoose";


const handler = async(req,res) => {

    let products = await Products.find();


    res.status(200).json( products );

}



export default connectDb(handler);
  