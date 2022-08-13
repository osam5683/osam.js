// import {MatrixInput,PrintMatrix} from './color_matrix.js'

// function MatrixSum(){
//     let MatrixA = MatrixInput('Matrix A')
//     console.log(`Matrix A is : `)
//     PrintMatrix(MatrixA)

//     let MatrixB = MatrixInput('Matrix B')
//     console.log(`Matrix B is : `)
//     PrintMatrix(MatrixB)
//     if ((MatrixA.length === MatrixB.length) && (MatrixA[0].length === MatrixB[0].length)){
//         let Sum = new Array(MatrixA.length)
//         for (let i=0;i<Sum.length;i++){
//             Sum[i]= new Array(MatrixA[0].length)
//         }

//         for (let i=0;i<Sum.length;i++){
//             for (let j=0;j<Sum[0].length;j++){
//                 Sum[i][j] = MatrixA[i][j] + MatrixB[i][j]
//         }
//         for(let i=0;i<3;i++){
//             console.log(i,i)
//         }

//     }
//     console.log(`The summation of the two matrices is: `)
        // PrintMatrix(Sum)
//     }else{
//         console.log('Matrix Addition is not possible')
//     }

//     // left = ''
//     // for(let i=0;j=2;i<3,j>=0,i++,j--){
//     //     console.log(i,j)
//     // }

// }
// MatrixSum() 


import readlineSync from 'readline-sync'
import color from 'colors-cli'
import { MatrixInput, PrintMatrix } from './color_matrix.js'

function Diag_matrix(){
    let matrix = MatrixInput('Diagnol')
    // PrintMatrix(matrix)

    if ( matrix.length != matrix[0].length){
       return 'Not a Square matrix'
    }
    else{
        let left_sum = 0
        let right_sum=0
        for (let i=0,j=matrix.length-1;i<matrix.length,j>=0;i++,j--){
           left_sum += matrix[i][i]
           right_sum+= matrix[i][j]
        }
        console.log('Left Diagonal matrix is ')
        Print_color_Matrix(matrix,'left')
        console.log('Right Diagonal matrix is ')
        Print_color_Matrix(matrix,'right')

        let diff = left_sum-right_sum
        if (diff >=0) console.log('ouput is ',color.green_bbt(diff));
        else console.log('output is',color.red_bbt(diff * -1))
    }
}

Diag_matrix()

function Print_color_Matrix(matrix,diag){
    for (let i=0;i<matrix.length;i++){
        var res = ""
        for (let j=0;j<matrix[i].length;j++){
            if ((i==j) && (diag == 'left')){
                res+=(color.blue(matrix[i][j]))+' '
            }
            else if ((i+j==(matrix.length-1)) && (diag == 'right')){
                res+=(color.red(matrix[i][j]))+' '
            }
           else{
            res+=(matrix[i][j])+' '
           } 
        }
        console.log(res)
    }
}




