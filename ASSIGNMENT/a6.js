// 1.WAP to Multiply two numbers without using multiplication symbol?
// Example:
// 	13 x 11
// Step 1 : Print the Numbers 
// Step 2 : divide the left number by 2, round it off to previous integer if has .5..
// Step 3 : double the right hand side number

// Repeat the above process until the left number reaches 1
// 13	11
// 6**	22**
// 3	44
// 1	88

// We can stop the process since we reached left number as 1.

// Step 4 : Strike of the entire row if the left number is an even
// Step 5 : Count all the numbers occurred in the right side without considering strike off row
// 11+44+88 = 143


// function mul(a,b){
//     let res=b;
//     console.log(a,b);
//     while (a>1){
//         a=Math.floor(a/2);
//         b=b*2;
//         if(a%2!=0){
//             res +=b;
//             console.log(a,b)
//         }
//         else console.log(a,b,'*')
//     }
//     return res;
//  }
//  let res = mul(19,27);
//  console.log('------')
//  console.log('',res)



// ___________________________________________________________________________

// 2. Write a function that pre-pends(adding as pre-fix) a zero to single digit numbers
// Input  1 : [5, 17, 3, 9, 98]
// Output 1 : [ '05', 17, '03', '09', 98 ]

// ___________________________________________________________________________

// 3. Write an algorithm to Split the Input String into two strings based on even and odd indexes.
// Left pad with '000' and right pad with '111' to the split string and display the output.

// Input 1 :
// code.in

// Output :
// 000cd.n111
// 000oei111

// Input 2:
// Hello there

// Output:
// 000Hlotee111
// 000el hr111
// ___________________________________________________________________________

// 4.Split the array and add the first part to the end. There is a given array and split it from a specified position, and move the first part of array add to the end.
// Write a function that accepts an array and index position to split as arguments.

// Input 1: [12, 10, 5, 6, 52, 36], index position to split = 2
// Output : [ 5, 6, 52, 36, 12, 10 ]

// Input 2: [12, 10, 5, 6, 52, 36], index position to split = 3
// Output : [ 6, 52, 36, 12, 10, 5 ]

// ____________________________________________________________________________

// 5.Defang IPv4 and Validate
// Input 1:  255.64.12.11
// Output: its valid IP

// Input: 255.642.32.11
// Output: 255.642.32.11
// its an Invalid IP

// ___________________________________________________________________________

// 6. Write an algorithm to convert 24 hours format time to 12 hours format time.
// Example
// Input 1: 15:30
// Output: 3:30 AM

// Input 2: 23:15
// Output: 11:15 AM