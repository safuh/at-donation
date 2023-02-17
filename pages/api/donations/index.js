import Donation from "@/models/Donation";
import db from "@/utils/db";
import { getSession } from "next-auth/react";


const handler = async (req, res) => {
    const session = await getSession({ req });
    if(!session ) {
        return res.status(401).send('signin required');
    }
    if(req.method === 'GET'){
        return getHandler(req, res);
    }
}

const getHandler = async (req, res) => {
    await db.connect();
    const donations = await Donation.find({});
    console.log('donations :>> ', donations);
    await db.disconnect();
    res.send(donations);
};

export default handler;