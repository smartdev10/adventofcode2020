import fs from 'fs';

let passports  = fs.readFileSync('./input4.txt','utf8').toString().split(/\n\n/)

// // Part 1
const fields =  [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
]
let count = 0
for (const pass of passports ) {
    if( fields.every(filed => pass.indexOf(filed) !== -1)){
        count++
    }
}
console.log(count)
// Part 2

function Validator(item){
    const [field,value] = item.split(':')
    switch(field){
       case 'byr':
           return value.length === 4 && (parseInt(value) >= 1920 &&  parseInt(value) <= 2002)
       case 'iyr':
           return value.length === 4 && (parseInt(value) >= 2010 &&  parseInt(value) <= 2020)
       case 'eyr':
           return value.length === 4 && (parseInt(value) >= 2020 &&  parseInt(value) <= 2030)
       case 'hgt':{
            const regex = RegExp('^([0-9]{2,3})(cm|in)$','g');
            if(value.match(regex) !== null){
                const regex = RegExp('^([0-9]{2,3})','g');
                const regex2 = RegExp('(cm|in)$','g');
                const number = parseInt(value.match(regex)[0])
                const unit = value.match(regex2)[0]
                if(unit === 'cm'){
                    return (number >= 150 && number <= 193)
                }else if(unit === 'in'){
                    return (number >= 59 && number <= 76)
                }
                return false
            }
            return false
       }
       case 'hcl':
           const regex = RegExp('^#[0-9a-f]{6}','g');
           return value.match(regex) !== null
       case 'ecl':
           return ['amb' ,'blu', 'brn', 'gry' ,'grn', 'hzl' , 'oth'].includes(value)
       case 'pid':{
            return value.length === 9 && !isNaN(Number(value))
       }
       default :
           return true
    }
}

let re1 = RegExp(/[a-z]{3}:[a-z0-9#]+/,'gi');
let count = 0
passports = passports.filter((pass)=> fields.every(field => pass.indexOf(field) !== -1))
console.log(passports.length)
for (const passport of passports)  {
   if(passport.match(re1).every(Validator)){
      count++
   }
}
console.log(count)