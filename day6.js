import fs from 'fs';

let groups  = fs.readFileSync('./input6.txt','utf8')
                .toString().split(/\n\s*\n/)
                .map(grp => grp.split(/\n/).join(""))
                .map(grp => [...new Set([...grp.split("").join("").replace(/\r/g, "")])])


const total =  groups.reduce(function(charCount, item) {
      return charCount + item.length;
}, 0); 
  
console.log(total); 


// Part 2
groups  = fs.readFileSync('./input6.txt','utf8')
                .toString().split(/\n\s*\n/)
                .map(grp => grp.split(/\n/).map(str => str.replace(/\r/g, "")).map(str => str.split('').sort()))
let total2 = 0;
let answers = new Set()
for (const grp of groups) {
  for (const g of grp) {
    for (const an of g) {
      if(grp.every(g => g.includes(an))){
        answers.add(an)
      }
    }
  }
  total2+=answers.size
  answers = new Set()
}
console.log(total2)
