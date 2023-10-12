// Javascript Execution Content
/*
 Global Execution Context
 Function Execution Context
 Eval Execution Context 
*/

/*
Memory Phase
Execution Phase

*/

let val1 = 10
let val2 = 5

function addnum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addnum(val1,val2)
let result2 = addnum(10,2)

console.log(result1);
console.log(result2);

/*
Global Execution Phase
        |     
  Memory Phase
   val1 = undefined
   val2 = undefined
   addnum = defination
   result1 = undefined
   result2 = undefined
      |
Execution Phase
  val1 = 10
  val2 = 5
  addnum --->new variable environment + Execution thread
                                    |
                            ________|________
                          |                    |
                          memory phase          Execution Context

                          val1 = undefined        val1 = 10      
                          val2 = undefined        val2 = 5
                          total = undefined       addnum = 15 delete ,same for result2 for more use sources in browser
                         
*/
