import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Richard',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Glazed Donut',
      slug: 'glazed-donut',
      category: 'Donuts',
      image: '/images/glazeddonut.jpg', //856 x 564
      price: 1.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'A delicious glazed donut',
    },
    {
      // _id: '2',
      name: 'Persimmon Cake',
      slug: 'persimmon-cake',
      category: 'Cakes',
      image: '/images/persimmoncake.jpg',
      price: 1.99,
      countInStock: 0,
      rating: 4.7,
      numReviews: 14,
      description: 'A delicious chocolate cookie',
    },
    {
      // _id: '3',
      name: 'Vietnamese Iced Coffee Cake',
      slug: 'vietnamese-iced-coffee-cake',
      category: 'Cakes',
      image: '/images/coffeecake.jpg',
      price: 14.99,
      countInStock: 10,
      rating: 4.8,
      numReviews: 10,
      description: 'A delicious Vietnamese Iced Coffee Cake',
    },
  ],
};
export default data;
