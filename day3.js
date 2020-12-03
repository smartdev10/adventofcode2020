import fs from 'fs';

//Part 1
const input = fs.readFileSync('./input3.txt' , { encoding:'utf8' }).toString().split('\r\n').map(line => line.split(''))
const lineCount = input.length
const row = input[0].length

let trees = 0
let index = 3
for (let i = 1; i < lineCount; i++) {
    if(!input[i][index]){
        index = 0
    }
    const pos = input[i][index];
    index = index * i
    if(pos === '#' ){
        trees++;
    }

}
console.log(row)