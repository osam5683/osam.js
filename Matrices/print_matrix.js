// import readlineSync from "readline-sync"
// let a = readlineSync.question("enter the value of a");
// console.log(a);



// PRINT MATRIX

// import readlineSync from "readline-sync"

// function MatrixInput(){
//     let rows = readlineSync.question('Enter number of rows:')
//     let cols = readlineSync.question('Enter number of columns:')
//     console.log(`Given matrix is ${rows} x ${cols} dimension`)
// }
// MatrixInput()





import readlineSync from "readline-sync"

function MatrixInput(name){
    let rows = readlineSync.questionInt('Enter ${name} number of rows:')
    let cols = readlineSync.questionInt('Enter ${name} number of columns: ')
    console.log(`Given matrix is ${name} ${rows} x ${cols} dimension`)

    let Matrix = new Array(rows)
    for (let i=0;i<Matrix.length;i++){
        Matrix[i] = new Array(cols)
    }
    
    for(let i=0;i<Matrix.length;i++){
        Matrix[i] = new Array(cols)
    }
        
        for (let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
            
            Matrix[i][j]=readlineSync.questionInt(`Enter element of ${name} ${i},${j}: `)
        }
    }
    return Matrix
}
    function PrintMatrix(matrix){
        for (let i=0;i<matrix.length;i++){
            var res = ""
            for (let j=0;j<matrix[i].length;j++){
                res+=(matrix[i][j])+' '
            }
            console.log(res)
        }
    }

// PrintMatrix(mat)
export {MatrixInput, PrintMatrix}





