// for of

// ["","",""]
// [{},{},{}]

let arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);
}

let greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

// Maps --> known for unique values

let map = new Map()
map.set('IN', "INDIA") 
map.set('FR', "FRA") 
map.set('RUS', "RUSSIA") 

// console.log(map);

// for (const key of map) {
    //     console.log(key);
    // }
    // for (const [key, value] of map) {
        //     console.log(key, ":-", value);
        // } // see the difference between them

// for (const key in map) {
//      console.log(key);
//  }  // map are not iterable
        
let myObject = {
   js : "javascript",
   cpp : "C++",
   rb : "ruby",
   swift : "swift by apple"
}
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// } objects are not iterable forof loop

// for (const key in myObject) {
//     // console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// let programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//   console.log(programming[key]);
// }

let programming = ["js", "rb", "py", "java", "cpp"]

// programming.forEach( function (item) {
//     console.log(item);
// })

// programming.forEach((item)=>{
//     console.log(item);
// })


// function printMe(item){
// console.log(item);
// }

// programming.forEach(printMe)

// programming.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

let myCoding = [
    {
        lang1 : "js",
        lang2 : "javascript"
    },
    {
        lang1 : "py",
        lang2 : "python"
    },
    {
        lang1 : "java",
        lang2 : "javafile"
    }
]

myCoding.forEach((item)=>{
    
    console.log(item.lang2);

})