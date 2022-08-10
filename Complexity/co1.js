// Complexity of algorithms

//  1. Time complexity - Big "O" Notation
// 2. Space Complexity 

// var a=3;
// console.log(3)

// O(1) or O(c) is constant 
// no matter how many inputs we give the output will not be changed

// O(n) - 








// BINARY  SEARCH 

// let search = 7
// let a = [1,2,3,4,5,6,7,8]
// let start = a[0];
// let end = a.length; 
// let mid =  start + end /2




// WAP to multiply two numbers without using '*'
// ALGORITHM : 
//  operand 1 should be divided by 2
// operand 2 multiplied by 2 
// and the even number line of operand 1 should be terminated 
// and the remaining number line of operand 2 should be added

 function mul(a,b){
    let res=b;
    console.log(a,b);
    while (a>1){
        a=Math.floor(a/2);
        b=b*2;
        if(a%2!=0){
            res +=b;
            console.log(a,b)
        }
        else console.log(a,b,'-')
    }
    return res;
 }
 let res = mul(19,27);
 console.log('------')
 console.log('',res)


// BONUS QUESTION
//  find the index value of 2d arrays






