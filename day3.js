import fs from 'fs';


//Part 1
const input = fs.readFileSync('./input3.txt' , { encoding:'utf8' }).toString().split('\r\n').map(line => line.split(''))
const lineCount = input.length

let trees = 0
let index = 3
let i = 1
while(i < lineCount) {
    const pos = input[i][index];
    index = index + 3

    if(index > 30){
        index -= 31;
    }
    if(pos === '#' ){
        trees++;
    }
    i++
}
console.log("number" , trees)

// Part 2

const slopes = [
    [1,1],
    [3,1],
    [5,1],
    [7,1],
    [1,2]
];

let total = 1
for (const slop of slopes) {
    let i = slop[1]
    let trees = 0
    let index = slop[0]
    while(i < lineCount) {
        const pos = input[i][index];
        index = index + slop[0]
    
        if(index > 30){
            index -= 31;
        }
        if(pos === '#' ){
            trees++;
        }
        i = i + slop[1]
    }  
    total =  total * trees
}

console.log("number" , total)