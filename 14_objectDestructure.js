let course = {
    coursename : "JS",
    price : "999",
    courseInstructor : "Hitesh Sir"
}

// course.courseInstructor

let {courseInstructor: instructor} = course // --> destructor

console.log(instructor);

// react js --> uses destructor

// let navbar = ({company}) =>{

// }
// navbar(company = "hitesh")

// API's

// {
//    "name" : "vedant",
//     "coursename" : "JS",
//     "price" : "free"
// }

[
    {},
    {},
    {} // JSON means API
]