import bcrypt from "bcryptjs"
var saltRound = 8

export default {

  users : [
    {
      name : "faizan",
      email : "faizanshaikh0342@gmail.com",
      password : bcrypt.hashSync("123" , 8),
      isAdmin : true
    },
    {
      name : "sufyan",
      email : "faizansufyan0342@gmail.com",
      password : bcrypt.hashSync("1234" , 8),
      isAdmin : false
    }
  ],

    products: [
      {
        name: 'Slim Shirt',
        category: 'Shirts',
        image: '/image/img1.jpg',
        price: 60,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 10,
        stock : 2,
        describtion : "good Product"
      },
      {
       
        name: 'Fit Shirt',
        category: 'Shirts',
        image: '/image/img2.jpg',
        price: 50,
        brand: ' Nike',
        rating: 4.2,
        numReviews: 5,
        stock : 7,
        describtion : "good Product"
      },
      {
    
        name: 'Best Pants',
        category: 'Pants',
        image: '/image/img3.jpg',
        price: 70,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 8,
        stock : 9,
        describtion : "good Product"
      }, {
     
        name: 'Best Pants1',
        category: 'Pants',
        image: '/image/img4.jpg',
        price: 70,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 8,
        stock : 0,
        describtion : "good Product"
      },
      {
     
        name: 'Best Pant2s',
        category: 'Pants',
        image: '/image/img5.jpg',
        price: 70,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 8,
        stock : 1,
        describtion : "good Product"
      },
      {
   
        name: 'Best Pants3',
        category: 'Pants',
        image: '/image/img6.jpg',
        price: 70,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 8,
        stock : 4,
        describtion : "good Product"
      }
    ]
  }