import Product from "../../models/products";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {

    if(req.method == 'PATCH'){
        
    let p = await Product.findByIdAndUpdate(req.body._id, req.body);

    console.log(p);

     res.status(200).send({success: true});

    }else{
        res.status(400).send({message: 'invaild request'});
    }

};

export default connectDb(handler);