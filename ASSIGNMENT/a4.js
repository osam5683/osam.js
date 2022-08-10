// 1. WAP to Check whether given year is a leap year or not?


// function check_leapyear(a){
//     if( (0 == a % 4) && (0 != a % 100) || (0 == a % 400) ){
//         console.log(a+" is a leap year");  
//     }else{
//         console.log(a+" is not a leap year");  
//     }
// }check_leapyear(2028)

// ---------------------------------------------------------------------------------------------------------------------------

// WAP to check whether given string is a palindrome or not?

// function palindrome(name){
// var a=[]
// var reverseword=[]
// for(i=0;i<name.length;i++){
//     a.push(name[i])
// }
// for(i=0;i<name.length;i++){
// reverseword+=a.pop()
// }if(reverseword===name){
// console.log(reverseword + " is a palindrome")}
// else {
// console.log(reverseword + " is not palindrome")}
// }
// palindrome("aziza")

// -------------------------------------------------------------------------------------------------------------------------

// WAP to find sum of all the digits of given input number? 

//  function sum(N) {
//         let x = 0
//         var s =  []
//         while (N > 0){
//             s.push(N % 10);
//            N = Math.trunc(N / 10);
//         }
//         console.log(s)
//         for(i=0;i<=s.length-1;i++){
//           console.log(s[i])
//             x+=s[i]
//         }
//         console.log('----')
//         console.log(x)
//     }sum(786)

// ----------------------------------------------------------------------------------------------------------------------------

// WAP to delete all the positive numbers from the array
 
// function deletepositive(a){
//     for(i=0;i<a.length;i++){
//         if(a[i]>=0){
//             a.splice(i,3)
//         }
//     }
//     return a
// }
// var a =[-1,8,9,3,-2,-18,0]
// console.log(deletepositive(a))
    

// ---------------------------------------------------------------------------------------------------------------------------

// WAP to remove duplicates from the given array?

function unique(a){
    for(i=0;i>a.length;i++){
        if(a[i]>=0){
        a.splice(i,3)
    }                                          // INCOMPLETE
}
return a
}
let a=[2,21,-5.6,21,89,43,-5,09,2,34,43]
// let unique = [...new Set(a)]
console.log(unique(a))
    

