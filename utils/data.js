import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Mike',
            email: 'mlaufersweiler@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Mac',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        },
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            catergory: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 12,
            countInStock: 22,
            description: 'A popular shirt'
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            catergory: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 3.9,
            numReviews: 7,
            countInStock: 29,
            description: 'A popular adidas shirt'
        },
        {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            catergory: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 90,
            brand: 'Raymond',
            rating: 4.7,
            numReviews: 19,
            countInStock: 9,
            description: 'A popular raymond shirt'
        },
        {
            name: 'Golf Pants',
            slug: 'gold-pants',
            catergory: 'Pants',
            image: '/images/pants1.jpg',
            price: 80,
            brand: 'Oliver',
            rating: 4.0,
            numReviews: 9,
            countInStock: 13,
            description: 'Active golf pants'
        },
        {
            name: 'Fit Pants',
            slug: 'fit-pants',
            catergory: 'Pants',
            image: '/images/pants2.jpg',
            price: 70,
            brand: 'Zara',
            rating: 4.9,
            numReviews: 25,
            countInStock: 4,
            description: 'Popular slim pants'
        },
    ]
};

export default data;