import bcrypt from 'bcryptjs';

// INSTRUCTIONS TO ADD NEW PRODUCTS:
// 1. Add new product to products array
// 2. Load localhost:5000/api/seed to seed the database
// 3. Load localhost:5000/api/products to see the new product
// 4. Load localhost:3000/products to see the new product

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
      description:
        'A delicious Vietnamese Iced Coffee Cake with chocolate mocha frosting',
    },
    {
      // _id: '4',
      name: 'Challah Bread',
      slug: 'challah-bread',
      category: 'Cakes',
      image: '/images/challahbread.jpg',
      price: 9.99,
      countInStock: 10,
      rating: 5,
      numReviews: 10,
      description: 'Freshly baked challah bread',
    },
    {
      name: 'The Ultimate Decadent Chocolate and Cream Layer Cake',
      slug: 'choctlate-and-cream-cake',
      category: 'Cakes',
      image: '/images/chocolatecake.jpg',
      price: 24.99,
      countInStock: 10,
      rating: 5,
      numReviews: 10,
      description:
        'A homemade, double layer chocolate cake with a cream filling',
    },
    {
      name: 'Cream Puffs',
      slug: 'cream-puffs',
      category: 'Cakes',
      image: '/images/creampuffs.jpg',
      price: 14.99,
      countInStock: 10,
      rating: 5,
      numReviews: 10,
      description: 'A dozen soft, fluffy, delicious cream puffs',
    },
    {
      name: 'Gingerbread Cookies',
      slug: 'gingerbread-cookies',
      category: 'Cookies',
      image: '/images/gingerbread.jpg',
      price: 14.99,
      countInStock: 10,
      rating: 5,
      numReviews: 10,
      description: 'A dozen delicious gingerbread cookies',
    },
    {
      name: 'Italian Cream Cake',
      slug: 'italian-cream-cake',
      category: 'Cakes',
      image: '/images/italiancreamcake.jpg',
      price: 24.99,
      countInStock: 10,
      rating: 5,
      numReviews: 10,
      description: 'A rich homemade Italian Cream Cake',
    },
  ],
};
export default data;
