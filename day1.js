//Part 1
import fs from 'fs';


const input = fs.readFileSync('./input1.txt' , { encoding:'utf8' }).toString().split('\r\n').map(num => parseInt(num))

let first = 0
let second = 0
for (let i = 0; i < input.length; i++) {
    first = input[i]
    const numero = 2020 - parseInt(first)
    if(input.includes(numero)){
        second = numero
        console.log("found it")
        break;
    }
}

console.log(parseInt(first) * parseInt(second))

// part 2
let first = 0
let second = 0
let third = 0
for (let i = 0; i < input.length; i++) {
    if(third){
        break
    }
    for (let j = i + 1; j < input.length; j++) {
        first = parseInt(input[i])
        second = parseInt(input[j])
        const sum = first + second
        const numero = 2020 - sum
        if(input.includes(numero)){
            third = numero
            console.log("found it")
            break;
        }
    }
}
console.log(first * second * third)