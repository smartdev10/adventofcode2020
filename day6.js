import fs from 'fs';

let groups  = fs.readFileSync('./input5.txt','utf8').toString().split(/\n\n/)


for (const group of groups) {
    let re1 = RegExp(/[a-z]+/,'gi');
}