import fs from 'fs';

const passports  = fs.readFileSync('./input4.txt' , { encoding:'utf8' }).toString().split(/\n\s*\n/)

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
// let count = 0
// for (const pass of passports ) {
//     if( fields.every(filed => pass.indexOf(filed) !== -1)){
//         count++
//     }
// }
// console.log(count)
// Part 2

function Validator(item){
    let res = false
    const field = item.split(':')[0]
    const value = item.split(':')[1]
    switch(field){
       case 'byr':
           res = value.length === 4 && parseInt(value) >= 1920 &&  parseInt(value) <= 2020
           break
       case 'iyr':
           res = value.length === 4 && parseInt(value) >= 2010 &&  parseInt(value) <= 2020
           break
       case 'eyr':
           res = value.length === 4 && parseInt(value) >= 2020 &&  parseInt(value) <= 2030
           break
       case 'hgt':{
            const regex = RegExp('^([0-9]{2,3})(cm|in)$','gi');
            if(regex.test(value)){
                const regex = RegExp('^([0-9]{2,3})','g');
                const regex2 = RegExp('(cm|in)$','g');
                const number = parseInt(value.match(regex)[0])
                const unit = value.match(regex2)[0]
                console.log(number,unit)
                res = unit === 'cm' ? number >= 150 && number <= 193 : unit === 'in' ? number >= 59 && number <= 76 : false
            }
            break
       }
       case 'hcl':
           const regex = RegExp('^#[0-9-a-f]{6}$','gi');
           res = regex.test(value)
           break
       case 'ecl':
           res = ['amb' ,'blu', 'brn', 'gry' ,'grn', 'hzl' , 'oth'].indexOf(value) !== -1
           break
       case 'pid':{
            const regex = RegExp('^[0-9]{9}$','gi');
            res = regex.test(value)
            break
       }
       default :
           res = true
    }
    return res
}

let re1 = RegExp(/[a-z]+:[a-z0-9#]+/,'gi');
let count = 0
for (const passport of passports ) {
    if(fields.every(field => passport.indexOf(field) !== -1)){
        if(passport.match(re1).every(Validator)){
            count++
        }
    }
}
console.log(count)