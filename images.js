// let obj1={
//     name:"anuj",
//     age:23,
//     class:"bca",
//     education:{
//         class:"bca",
//         year:"2nd semester",
//     }
// }
// // let obj2={...obj1};
// // let obj2=obj1;
// // let obj2=JSON.stringify(obj1);
// // let obj3=JSON.parse(obj2);
// let obj2=Object.assign({}.obj1);
// obj2.name="rajat";
// // obj3.education.year="3rd semester"
// console.log("Orginal object",obj1);
// console.log("copy object",obj2);
// // console.log("object 3",obj3)

// const { exec } = require("child_process");

// function clock(){
//     setInterval(()=>{
//         const date=new Date();
//         console.log("number",date);
//         console.log("Date",date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
//         console.log("Time",date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
        
//     },1000)
// }
// clock()

// function stopcounter(time){
//       let seconed=0;
//     const Timec=setInterval(()=>{
//         seconed=seconed+1;
//         console.log("Time counter",parseInt(seconed/60)+":"+seconed%60);
//         if(parseInt(seconed/60)==time){
//             clearInterval(Timec)
//         }
//     },1000)
// }
// stopcounter(1)

// const {exec}=require('child_process');
// const {countreset}=require('cansole');
// const {ValiHadervalue}=require('http');
// function play(){
//     const filePath='C:\\Users\\user\\Documents\\Practice_JavaScript\\assets\\eminem-63310.mp3'
//     const command=`start wmplayer "${filePath}`

// }
// exec(command,(err)=>{
//     if(err){
//         console.error(`Error playing sound:${err}`);
//         return;
        
//     }
//     console.log(`Audio started playing`);
    
// })
let arr=[8,3,5,4,2];
let a=arr.filter((ele)=>ele<3&&ele>5)
console.log(a);3
getprimes(arr);
console.log(prime);

console.log(arr.at(0));2
console.log(arr.findLast((ele)=>ele<5));


let arr2=[4,7,9,5]
console.log(arr.concat(arr2));8


console.log(arr.findIndex((ele)=>ele==3));1