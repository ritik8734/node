let a=10;
let b=23;

let write=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})
write.then((data)=>{
    b=data;
    console.log(a+b)
})