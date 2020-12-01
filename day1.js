//Part 1
import fs from 'fs';


const input = fs.readFileSync('./input1.txt' , { encoding:'utf8' }).toString().split('\n')

let first = 0
let second = 0
for (let i = 0; i < input.length; i++) {
    first = input[i]
    const numero = 2020 - parseInt(first)
    if(input.includes(`${String(numero)}\r`)){
        second = numero
        console.log("found it")
        break;
    }
}

console.log(parseInt(first) * parseInt(second))

//part 2
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
        if(input.includes(`${String(numero)}\r`)){
            third = numero
            console.log("found it")
            break;
        }
  }
}
console.log(first * second * third)