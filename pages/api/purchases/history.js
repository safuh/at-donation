import { getSession } from "next-auth/react";
import Purchase from "@/models/Purchases";
import db from "@/utils/db";

const handler = async (req, res) => {
    const session = await getSession({ req });
    if (!session) {
        return res.status(401).send({ message: 'signin required' });
    }

    const { user } = session;
    await db.connect();
    const purchases = await Purchase.find({ user: user._id });
    await db.disconnect();
    res.send(purchases);
};

export default handler;