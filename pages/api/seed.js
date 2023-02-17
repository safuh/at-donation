import data from '@/utils/data';
import User from '@/models/Users';
import Purchase from '@/models/Purchases';
import Donation from '@/models/Donation';
import db from '../../utils/db';


const handler = async (req, res) => {
    console.log("purchases", data.purchases)
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await Purchase.deleteMany();
    await Purchase.insertMany(data.purchases);
    await Donation.deleteMany();
    await Donation.insertMany(data.donation);
    await db.disconnect();

    res.send({ message: 'update added successfully' })
}

export default handler;