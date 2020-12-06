import fs from 'fs';

let groups  = fs.readFileSync('./input6.txt','utf8')
                .toString().split(/\n\n/)
                .map(grp => grp.split(/\n/).join(""))
                .map(grp => [...new Set([...grp.split("")])])


const total =  groups.reduce(function(charCount, item) {
      return charCount + item.length;
}, 0); 
  
console.log(total); 


// Part 2
groups  = fs.readFileSync('./input6.txt','utf8')
                .toString().split(/\n\n/).map(grp => grp.split(/\n/))
console.log(groups[0])

for (const grp of groups) {
    for (const q of grp) {
        
    }
}