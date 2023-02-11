import bcryptjs from 'bcryptjs';
import User from '@/models/Users';
import db from '@/utils/db';

async function handler(req, res) {
    if (req.method !== 'POST') {
        return
    }

    const { name, phonenumber, password } = req.body;

    if (
        !name ||
        !phonenumber ||
        !password ||
        password.trim().length < 5
    ) {
        res.status(422).json({
            message: 'Validation Error'
        })
        return
    }
    await db.connect();

    const existingUser = await User.findOne({ phonenumber: phonenumber });
    if (existingUser) {
        res.status(422).json({ message: 'User already exists!' })
        await db.disconnect();
        return
    }

    const newUser = new User({
        name,
        phonenumber,
        password: bcryptjs.hashSync(password),
        isAdmin: false,
    });
    const user = await newUser.save();
    await db.disconnect();
    console.log(user);
    res.status(201).send({
        message: 'User saved successfully!',
        _id: user._id,
        name: user.name,
        phonenumber: user.phonenumber,
        isAdmin: user.isAdmin,
    });
}

export default handler;