
import connectDb from "../../middleware/mongoose";
import User from '../../models/Users';
var CryptoJS = require("crypto-js");

export default async function handler(req, res) {

    await connectDb();

    if (req.method == 'POST') {
        const { username, password, email } = req.body;
        // console.log(req.body);
        const encryptedPass = CryptoJS.AES.encrypt(password, `${process.env.SECRET_KEY}`).toString();
        console.log(encryptedPass);
        const p = new User({ username, email ,password: encryptedPass });

        console.log(p);
        await p.save();
        res.status(200).send({ success: true });

    } else {
        res.status(400).send({ message: 'invaild request' });
    }

}
