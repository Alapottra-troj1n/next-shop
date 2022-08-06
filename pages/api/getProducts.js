import Products from "../../models/products";
import connectDb from "../../middleware/mongoose";


export default async function handler (req,res){

    await connectDb();
    let products = await Products.find();



    let tshirts = {};
    for(let item of products){
        if(item.title in tshirts){
                if(!tshirts[item.title].color.includes(item.color) && availableQty > 0){

                    tshirts[item.title].color.push(item.color);


                }


        }else{

            tshirts[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQty > 0){
                    tshirts[item.title].color = [item.color]
                    tshirts[item.title].size = [item.size]


            }

        }
    }



    res.status(200).json( products );

}






  