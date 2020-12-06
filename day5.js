import fs from 'fs';

let input  = fs.readFileSync('./input5.txt','utf8').toString().split(/\n/)

// part 1
let boardingPass = []
for (const data of input) {
    let startRow = 0
    let endRow = 127
    let startCol = 0
    let endCol = 7
   for (let index = 0; index < data.length; index++) {
       const ch = data[index];
       switch(ch){
           case 'F':
            endRow =  Math.floor(startRow / 2) + Math.floor(endRow / 2)
            break
           case 'B':
            startRow = Math.floor(startRow / 2) + Math.round(endRow / 2)
            break
           case 'R':
            startCol =  Math.floor(startCol / 2) + Math.round(endCol / 2)
            break
           case 'L':
            endCol =  Math.floor(startCol / 2) + Math.floor(endCol / 2)
            break
        }
   }
   boardingPass.push((endRow * 8) + endCol)
}



// part 2
const filteredBoardingPasses = boardingPass.filter(board => boardingPass.indexOf(board + 1) === -1)
console.log(Math.min(...filteredBoardingPasses) + 1)
