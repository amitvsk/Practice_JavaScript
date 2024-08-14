// function call2(){
//     return 30
// }
// function call1(b,callback){
//     return  callback() / b
// }
//  console.log (call1(3,call2))


// let obj1={
//     name:"rajat",
//     age:17,
//     education:{
//         class:"Bca",
//         year:"1st year"
//     }
// }

//  //let obj2=obj1
//  //let obj2=Object.assign({},obj1);
//  //let obj2={...obj1}


// let obj2=JSON.stringify(obj1)

// let obj3=JSON.parse(obj2)


// obj3. name="tushar"
//  obj3.education.class="B.tech 2nd Semester";
//  console.log("Orginal object", obj1);
//  console.log("Copy object", obj2);
//  console.log("object 3",obj3);


// function clock() {
//     setInterval(() => {
//         const date = new Date();
//         console.log("number", date);

//         console.log("Date==>", date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
//         console.log("time==>", date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

//     }, 1000);
// }
// clock()


// let user ={
//     name:"xyz"
//     age:18,
//     class:"bca",
//     gender :"male"
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// user.name ="rajat"

// // console.log(user);


// function login (email,passward){
//    if(!email) {
//     return ("please enter your email")
//    }
//    if(!passward){
//     return ("please enter your passward")
//    }
//    if(email=="rajatjha20070@gmail.com"){
//     if(passward=="90580"){
//         return ("succesfully login")
//     }else{ return ("passward is incorect" )}

//    }else{
// return ("email id is not ragister")
//    }
// }

// console.log(login("rajatjha20070@gmail.com","90580"));


// function timeCounter() {
//     let minutes = 0;
//     let seconed = 0;
//     setInterval(() => {
//         seconed = seconed+1;
//         //console.log("minutes",seconed/60);
//         //console.log("seconed",second%60);
//         console.log("time counter", parseInt(seconed/60) + ":" + seconed % 60);


//     }, 1000);
// }
// timeCounter()

// function stopClock(time){
//     let seconed=0;
    
//     let timec=setInterval(() => {
//         seconed=seconed+1
//         //console.log("minutes",seconed/60);
//         //console.log(("seconed",seconed%60));
//         console.log("timecounter",parseInt(seconed/60)+":"+ seconed%60);
        
//         if(parseInt(seconed)==time) {
// clearInterval(timec)
//         }  
//     }, 1000);
//     setTimeout(() => {
//         clearInterval(timec)
//     },time*1000*60 );
// }

// stopClock(20)

// function add(){
//     var count =0;
//     return{
// increment:function(value){
//     count =count+value
//     return count
// },
// dicrement:function(value){
// count =count-value
// return count
// }
//     }
// }


// let arr=[8,3,5,4,2]

//firstquestion
// console.log(arr.at(3));



// seconedquestion
// console.log(arr.at(0));

// thirdquestion
// let a=arr.findindex((ele)=>ele==5)
// console.log(a);
// let b=arr.findLast((ele)=>ele<5)
// console.log(b);

// fourthquestion
// let c=arr.findIndex((ele)=>ele==3)
// console.log(c);

// sixquestion
// let d=arr.filter((ele)=>ele%2!==0)
// console.log(d);

//sevenquestion
// let e=arr.filter((ele)=>ele>3&&ele<5)
// console.log(e);

// eightquestion
// let arr2=[7,9]
// console.log(arr.concat(arr2));

// fivequestion
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let primeNumbers=arr.filter((ele)=>ele==arr)
console.log(primeNumbers);



