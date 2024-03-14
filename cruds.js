const fs=require('fs');
const path =require('path');
const dire=path.join(__dirname,'file');
const filepath=`${dire}/apple.txt`
 //towrite
// fs.writeFileSync(filepath,'efgrgrrgr')

//toread
//  fs.readFile(filepath,'utf8',((err,t)=>{
// console.log(t)
//  }))


//to add
// fs.appendFile(filepath,'this is update', (err)=>{
//     console.log(err)
// })

//torename
//fs.rename(filepath,`${dire}/aple.txt`,(erro)=>{})

//todelet
fs.unlinkSync(`${dire}/aple.txt`)