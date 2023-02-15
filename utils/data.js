import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'apeli',
            phonenumber: '+254706757828',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
            image: '/images/slide1.png',
            isFeatured: true,
        },
        {
            name: 'harry',
            phonenumber: '+254720667402',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
            image: '/images/slide2.jpeg',
            isFeatured: true,
        },
        {
            name: 'faith',
            phonenumber: '+254701234567',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
            image: '/images/slide3.png',
            isFeatured: true,
        }
    ],
    purchases: [

        {
            phonenumber: '+254701234567',
            donation: '140',
            airtime: '14',
        },
        {
            phonenumber: '+254720667402',
            donation: '200',
            airtime: '20',
        },
        {
            phonenumber: '+254701234567',
            donation: '300',
            airtime: '30',
        }
    ]
}

export default data;