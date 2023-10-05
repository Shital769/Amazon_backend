import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Shital",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Suman",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: "1",
      name: "Nike Tshirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numberOfReviews: 10,
      description: "high quality product",
    },
    {
      _id: "2",
      name: "Adidas Tshirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4,
      numberOfReviews: 9,
      description: "high quality product",
    },
    {
      _id: "3",
      name: "Lacoste Free Tshirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 240,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numberOfReviews: 13,
      description: "high quality product",
    },
    {
      _id: "4",
      name: "Nike Slim Pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 80,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numberOfReviews: 12,
      description: "high quality product",
    },
    {
      _id: "5",
      name: "Puma Slim Pant",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 90,
      countInStock: 5,
      brand: "Puma",
      rating: 4.6,
      numberOfReviews: 15,
      description: "high quality product",
    },
    {
      _id: "6",
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 85,
      countInStock: 13,
      brand: "Adidas",
      rating: 4.6,
      numberOfReviews: 14,
      description: "high quality product",
    },
  ],
};

export default data;
