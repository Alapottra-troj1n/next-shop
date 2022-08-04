import Product from "../../models/products";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {

    if(req.method == 'POST'){
        let p = new Product({

            title: req.body.title,
            slug: req.body.slug,
            img: req.body.img,
            desc: req.body.desc,
            category: req.body.category,
            size: req.body.size,
            availableQty: req.body.availableQty

        });
       await p.save();
       res.status(200).send({message: 'success'});

    }else{
        res.status(400).send({message: 'invaild request'});
    }

};

export default connectDb(handler);