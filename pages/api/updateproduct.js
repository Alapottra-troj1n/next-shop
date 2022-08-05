import Product from "../../models/products";
import connectDb from "../../middleware/mongoose";


export default async function handler (req,res){

    await connectDb();

    if(req.method == 'PATCH'){
        
        let p = await Product.findByIdAndUpdate(req.body._id, req.body);
    
        console.log(p);
    
         res.status(200).send({success: true});
    
        }else{
            res.status(400).send({message: 'invaild request'});
        }

}

