// 1 10
// 2 9
// 3 8
// 4 7
// 5 6
// 6 5
// 7 4
// 8 3
// 9 2
// 10 1

// for (i=1;i<=10;i++){
//     console.log(i,11-i)
// }

// for (i=1;i<=5;i++){
//      console.log(i,11-i)
// }

// for (i=1;i<=50;i++){
//     console.log(i,11-i)
// }

// for (let i=1,j=10;i<=10,j>=1;i++,j--){
//     console.log(i,j)
// }

// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678


// for (i=1;j=9;i<=9,j>=1,i++,j--){
// console.log(i,j)
// }

// let a=''
// for (let i=1;i<=5;i++){
//     a = a + 1
//     console.log (a)
// }

// 1
// 11
// 111
// 1111
// 11111

// a=''
// for (let i=5;i>=1;i--){

//     for (let j=i;j>=1;j--){
//     a = a+'* ' 
//     console.log(a)
//     }
//     a=''
// }



// let a=''
// for (let j=1;j<=5;j++){
//     a=''
//     for (let i=j;i<=5;i++){
//         a=a + '*'

//     }
//     console.log(a)
// }
// for (let i=1;i<=5;i++){
// a=''
//     for (let j=i;j>=1;j--){
//     a ='  *' + a 
//     }
//     console.log(a)
    
// }



//  a= 5;
//     b="";
// for (let i=1;i<=5;i++) {
//   // print spaces
//   for (let j=1;j<=i;j++){
//     b += "*";
//   }
//   b+='\n'
// }
// console.log(b);


a='';
let spaces = 4;
for (let i=1;i<=spaces+1;i++){
    for (let j=spaces;j>=i;j--){
        a=a+' ';
    }
    for(let k=1;k<=i;k++){
        a=a+'*'
    }
    console.log(a);
    a='';
}