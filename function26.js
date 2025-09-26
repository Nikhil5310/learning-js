// set of instructuntions is called function  becuse is code reusability

// function identifire() function declaration
//  { ------

   // code

// }---------  function defination

// identifire()  --------------  function call

// function call
// function declaration
// function defination


// function sum(){ 
//     let a = 10
//     let b = 20
//     console.log(a+b);
// }

//    sum()  // function call


//    write a program finde area of rectangle using function to take input from user

    // function area(){
    //     let a = parseInt(prompt("enter length"))
    //     let b = parseInt(prompt("enter breadth"))
    //     console.log(a*b);
    // }
    // area() 


// range 20 to 11 to print 20 to 1 and 10 to 1  to any number enter to print some number just like enter to print 10 to 5 to print 10 to 5


function printNum(){
    let num = parseInt(prompt("enter a number"))
    let num1 = parseInt(prompt("enter a number to stop"))      
    for(let i = num; i >= num; i--){
        console.log(i);
    }    
}
printNum()