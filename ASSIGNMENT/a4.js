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
 
// let  a= [ -4,-3,-2,-1,0,1,2,3,4]
// let deletArr= (a)=>{
// n_array=[]
//     for(i=0;i<=( a.length);i++){
//               if((a[i])<0)
//             {
//               n_array.push(a[i])
//             }
//      }
//      console.log(n_array)
// }
// deletArr(a)

    

// ---------------------------------------------------------------------------------------------------------------------------

// WAP to remove duplicates from the given array?
    
// a=[2,2,74,47,87,74,98,37,89,73,-3,4,-3 ]
// let duplicate= (a)=>{
//      n_arr=[]
//     for(i=0;i<=a.length-1;i++){
//         if( n_arr.indexOf(a[i])=== -1){
//             n_arr.push(a[i])
//         }
//     }
//     console.log(n_arr)
// }
// duplicate(a)