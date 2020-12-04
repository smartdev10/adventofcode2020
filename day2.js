import fs from 'fs';

//Part 1
const input = fs.readFileSync('./input2.txt' , { encoding:'utf8' }).toString().split('\r\n')

let countValidPasswords = 0
for (let i = 0; i < input.length; i++) {
   const line = input[i].split(/\s/)
   const password = line[2]
   const policy = line[0].split('-')
   const instance = line[1].split(':')[0]
   let re1 = new RegExp(`${instance}`,'g');
   const count = password.match(re1)?.length
   if(count >= parseInt(policy[0]) && count <= parseInt(policy[1])){
    countValidPasswords++
   }
}

console.log(countValidPasswords)

// Part 2

let countValidPasswords = 0
for (let i = 0; i < input.length; i++) {
   const line = input[i].split(/\s/)
   const password = line[2]
   const policy = line[0].split('-')
   const instance = line[1].split(':')[0]

   const indices = [];
   for(let i=0; i < password.length;i++) {
        if (password[i] === instance) indices.push(i + 1);
   }
   if(indices.indexOf(parseInt(policy[0])) !== -1 && indices.indexOf(parseInt(policy[1])) !== -1){
    continue;
   }else if(indices.indexOf(parseInt(policy[0])) !== -1 || indices.indexOf(parseInt(policy[1])) !== -1){
    countValidPasswords++
   }
}
console.log(countValidPasswords)
