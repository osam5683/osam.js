// Confirm whether given number is a 3 digit number?
var a='11',a1='111'
if(a<a1){
    console.log('given number is a 3 digit number')
}
else if(a>a1){
    console.log('given number is not a 3 digit number')
}


// Confirm whether given number is an 'N' digit number?
// (Input should not be string)
var a=1000
length=(`${a}`.length)
console.log(length)


//  student > 75%
// if he has more than 75, allow to exam
// if he doesnt has ask for permission, if yes allow him, if not dont allow him

// var a='60',b='100';
// permission=false
// percentage=75
// if (percentage=a%b*10){
//     console.log('allow to write exam')
// }else if (permission==1){
//     console.log('permission given to write exam')
// }else{
//     console.log('not allowed to write the exam')
// }
// SAME PROGRAM(2)
var a=30;
permission=1

if (a>=75){
    console.log('allow to write exam')
}else if (a<=75 && permission==1 ){
    console.log('permission given to write exam')
}else{
    console.log('not allowed to write the exam')
}

// Find whether a given number is a prime number or not?
 
num=3
let found=false

if (num>=0){
    console.log(`${num}`,"is not a prime number") }
    else if(num!=1){
        console.log(`${num}`, "is neither prime nor composite");{
    }
}
if (found==false){
    console.log(`${num}`, "is a prime number")
}






// BONUS QUESTIONS 
// Biggest among three numbers
var a=3,b=4,c=5
let largest;
if(a >= b && a >= c) {
    largest = a;
}
else if (b >= a && b >= c) {
    largest = b;
}
else {
    largest = c;
}
console.log('the largest number is ' + largest)


// MULTIPLE TABLES PRINTING

 