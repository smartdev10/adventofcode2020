const regex = RegExp('^#[0-9-a-f]{6}$','gi');


console.log(regex.test('#123abc'))