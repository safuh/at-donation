import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'apeli',
            email: 'apeli@gmail.com',
            phonenumber: '+254706757828',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'harry',
            email: 'harrysafu@gmail.com',
            phonenumber: '+254720667402',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'faith',
            email: 'feiwewe@gmail.com',
            phonenumber: '+254701234567',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    purchases: [
        {
            id: 1,
            date : '15/01/2023',
            airtime: '150',
            phonenumber: '+254701234567',
            credit: '140',
            amountsaved: '10',
            image: '/images/slide2.jpeg',
            isFeatured: true,
        },
        {
            id: 2,
            date: '30/01/2023',
            airtime: '280',
            phonenumber:'+254720667402',
            amountsaved: '20',
            image: '/images/slide1.png',
            isFeatured: true,
        },
        {
            id: 3,
            date: '05/02/2023',
            airtime: '420',
            phonenumber: '+254701234567',
            amountsaved: '30',
            image: '/images/slide3.png',
            isFeatured: true,
        }
    ]
}

export default data;