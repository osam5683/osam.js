import readlineSync from "readline-sync"
import color from 'colors-cli'

function MatrixInput(name){
    let rows = readlineSync.questionInt(color.magenta('Enter ${name} number of rows:'))
    let cols = readlineSync.questionInt(color.magenta('Enter ${name} number of columns: '))
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
            
            Matrix[i][j]=readlineSync.questionInt(color.cyan(`Enter element of ${name} ${i},${j}: `))
        }
    }
    return Matrix
}
    function PrintMatrix(matrix){
        for (let i=0;i<matrix.length;i++){
            var res = ""
            for (let j=0;j<matrix[i].length;j++){
                res+=(color.red(matrix[i][j]))+' '
            }
            console.log(res)
        }
    }

// PrintMatrix(mat)
export {MatrixInput, PrintMatrix}