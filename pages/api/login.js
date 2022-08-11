
import connectDb from "../../middleware/mongoose";
import User from '../../models/Users'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
export default async function handler(req, res) {

    await connectDb();

    if (req.method == 'POST') {

        let user = await User.findOne({ "email": req.body.email });
       
        const bytes = CryptoJS.AES.decrypt(user.password, `${process.env.SECRET_KEY}`);
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

     

       if (user) {
            if (req.body.email === user.email && req.body.password === decryptedPass) {

                var token = jwt.sign({ email: user.email , username : user.username }, 'secretkey');
                
                res.status(200).send({ success: true, token })

            }
            res.status(400).send({ success: false, message: 'Username or Password is incorrect' });



        } else {
            res.status(400).send({ success: false, message: 'User not found' });
        }

        res.status(200).send({ success: true });

    } else {
        res.status(400).send({ message: 'invaild request' });
    }

}
