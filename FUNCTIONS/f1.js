// 0 1 1 2 3 5 8 13 21 .....

// function fibonacci(num){
//     let n1=0
//     let n2=1
//     let sum=0
//     output =' '
//     for (i=1;i<=num;i++){
//         output += `${n1} `
//         sum = n1+n2
//         sum = n1+n2
//         n1=n2
//         n2=sum
//     }
//     // console.log(output)
//     return output

// }//fibonacci(15)
// console.log(fibonacci(10))


let num=153
n= ('' + num).length
sum=0
temp=num
while(num>0){
    sum +=(num%10)**n
    num = (num/10)-(num/10)%1

}
if(sum==temp){
    console.log('armstrong')
}
else{
    console.log('not an armstrong')
}



// test1
function f_name(n){
    return(n+2)

}
export default f_name

// test2
import f_name from{} 