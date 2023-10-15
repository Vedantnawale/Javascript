// let coding = ["js", "rb", "py", "java", "cpp"]

// let values = coding.forEach((item)=>{
//     console.log(item);
//     return item // forEach loop not use return keyword
// })

// console.log(values);

// +++++++++++++++++++++++ Filter +++++++++++++++++++++++++++

// let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter((num) => num > 4 ) or implicit
// let newNums = myNums.filter((num) => {
//     return num > 4                  // explicit way
// } )
// console.log(newNums);

// let newNums = []
// myNums.forEach((num)=>{
//     if (num>4) {
//             newNums.push(num)
//     }
// })
// console.log(newNums);

// let books = [
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         publish: "April 10, 1925",
//         genre: "Fiction"
//     },
//     {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         publish: 'July 11, 1960',
//         genre: 'Fiction'
//     },
//     {
//         title: "Harry Potter and the Philosopher's Stone",
//         author: "J.K. Rowling",
//         publish: "June 26, 1997",
//         genre: "Fantasy"
//     },
//     {
//         title: "The Hobbit",
//         author: "J.R.R. Tolkien",
//         publish: "September 21, 1937",
//         genre: "Fantasy"
//     }
// ];

// let userBooks = books.filter((bk)=>{                    
//     return bk.genre === 'Fantasy'
// })
// userBooks = books.forEach((item)=>{
//     console.log(item.author);
// })

// console.log(userBooks); 

// +++++++++++++++++++++++ Map +++++++++++++++++++++++++++

// let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.map((num) => num + 10)

// let newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)  // chaining

// console.log(newNums);

// ++++++++++++++++++++++ Reduce ++++++++++++++++++++++++++

let myNums = [1, 2, 3, 4, 5]

// let myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc : ${acc}, currval : ${currval}`);
//     return acc + currval
// }, 0) 

let myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc : ${acc}, currval : ${currval}`);
    return acc + currval
}, 0)
// console.log(myTotal);

let shoppingCart = [
    {
        itemname : "JS Course",
        price : 2999
    },
    {
        itemname : "CSS Course",
        price : 1500
    },
    {
        itemname : "Data Scientist",
        price : 1999
    },
    {
        itemname : "Java Course",
        price : 3999
    }
]

let priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0 )

console.log(priceToPay);


























// just for fun
// for (let i = 10; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//      console.log(i + "*" + j + " = " + i*j);
//     }
      
//   }