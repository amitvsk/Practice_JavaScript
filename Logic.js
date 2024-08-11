// And gate &&

// let a=1;
// let b=1;

// if(a&&b){
//     console.log("True 1");
// }else{
//     console.log("false 0");
// }

// let d=undefined;
// let c="";

// if(d){
//     console.log('truthy value');
// }else{
//     console.log("falsey value");
// }




// let d=0
// console.log(d ? "true":"false");
// console.log(!d);

// let a="30";
// let b=30;

// console.log(typeof a,typeof b)
// if(a!==b){
//     console.log("true");
// }else{
//     console.log("false");
// }

// let c="rajat";
// let d="rajat1";

// console.log(c!==d);

// a=30, b=60, c=true, d=40, e="sunny"
// Question
// Compare a and b 
// Check data type d and c
// check e is Boolean or not

// let a=30;
// let b=60;
// if (a==b) {console.log("equal");
// } else{console.log("no equal");}

// let c=true;
// let  d=40;
// console.log(typeof c,typeof d);

// let e = true;
// if(e===true||e===false){
//     console.log("E value is Boolean");
// }else{
//     console.log('E value is not Boolean');
// }
// let am=typeof e
// console.log(am);
// if(am=="boolean"){
//     console.log("E value is Boolean");
// }else{
//     console.log('E value is not Boolean');
// }

// let a="30";
// let s=typeof a
// console.log(s);
// if (typeof a=="number") {console.log("value is number ");
// }else{console.log("value is not number");}
// let a=20;
// let b=30;
// let c=50;
// if (a+b==c){
//     console.log("velue is equel")

// }
// else console.log("velue is not equel")

// let a=30;
// let b=2;
// let c=15;

// if(a/c==b){
//     console.log("velue is equel");
// }else { console.log("velue is not equel")}

// let a = 30;
// let b = 20;

// console.log("a=",a,"b=",b);

// let temp=a+b;
// console.log("temp=",temp);
// b=temp-b;
// console.log("102 b=",b);
// a=temp-b;
// console.log("104 a=",a);

// console.log("value a",a);
// console.log("value b",b);

// a=a+b
// b=a-b;
// a=a-b;

// console.log("value a",a);
// console.log("value b",b);
// let result=1;
// for (let index = 1; index <= 5; index++) {
//  console.log("index",index);
//     result=result*index
//     console.log("result",result);
// }

// console.log(result);


// function factorial(a){
// let result=1;
// for (let i = 1; i <=a; i++) {
//     result=result*i
// }
// return result;
// }

// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(8));
// console.log(factorial(10));

// function add(a,b){
//     // let result=0;
//     // result=a+b
//     return a+b
// }

// console.log(add(5,20));

// function multiply(a,b,c) {
//     return a*b*c
// }
// console.log(multiply(2,4,6));

// function devide(a,b) {
//     return a/b
// }
// console.log(devide(4,2));

// function swap(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("value a=",a);
//     console.log("value b=",b);
//     return "success"
// }

// console.log(swap(5,10));

// function login(email,password){
//     if(!email) {
//         return 'Please enter your email id';
//     }
//     if(!password){
//         return 'Please enter your password';
//     }
//     if(email=="rajat@gmail.com"){
//         if(password=="12345"){
//             return "Successfully login";
//         }else{
//             return "Password is incurrect";
//         }
//     }else{
//         return "Email id is not register";
//     }
// }

// console.log(login("rajat@gmail.com","12345"));


// function loginotp(sendotp,verify) {
//     if(!sendotp){
//         return "please enter your mobile number "
//     } 
//     if(!verify){
//         return "please enter your otp"
//     }
//     if(sendotp=="987654321"){
//         if(verify=="4567"){
//         return ("login successful");}
//         else{
//             return "otp is wrong"
//         }
//     }else{
//         return ("mobile number is not register");
//     }
// }
// console.log(loginotp("987654321","4567"));

// function loginemail(email,otp) {
//     if(!email){
//         return("please enter your email")
//     }
//     if(!otp){
//         return("plese enter your otp")
//     }
//     if(email=="rajatjha@20070gmail.com"){
//         if(otp=="1234"){
//             return ("succesfully login")
//         }else{
//             return("otp is incorect")
//         }
//     }else{
//         return("email is not ragister")
//     }

// }
// console.log(loginemail("anuj","1234"));

//object 

// let user = {
//     name: "shumit",
//     age:24,
//     class:"BCA pass out",
//     gender:"Male"
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(typeof user);

// user.name="rajat"

// console.log(user);

// let obj1={
//     name:"Anuj",
//     age:17,
//     education:{
//         class:"Bca",
//         year:"1st year"
//     }
// }
//shallow copy
//Direct method
// let obj2=obj1;
// Object Assigned Method 
// let obj2=Object.assign({},obj1);
//Spread Method ...
// let obj2={...obj1}

//Deep Copy

// let obj2=JSON.stringify(obj1)

// let obj3=JSON.parse(obj2)

// obj3.name="Shumit"
// obj3.education.class="BCA 2nd Semester";
// console.log("Orginal object", obj1);
// console.log("Copy object", obj2);
// console.log("object 3",obj3);

//promise
// function call2(){
//     return 20
// }

// function call1(a,callBack){

//  return   callBack() +a
// }
// call1(123,call2)

// function featchUserData(id,callBack){
//     console.log("calling 1");
//     setTimeout(()=>{
//         callBack({id:id,name:"Rajat",age:28,gender:"male"})
//     },10000)
//}

// function getUserData(userData){
//     console.log("calling 2");
//     console.log("userdata=>",userData);
// }

// featchUserData(454,getUserData)

// setTimeout(()=>{
//     console.log("I am Rajat");
// },10)

// setTimeout(()=>{
//     console.log("First line");
// },10)


// console.log("Seconed line");
// setTimeout(()=>{
//     console.log("Rajat");
// },1001)

// setTimeout(()=>{
//     console.log("Shumit");
// },1000)


// console.log("Anuj");

// function clock(){
//     setInterval(()=>{
//         const date=new Date();
//         console.log("number",date);
//         console.log("Date==>",date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
//         console.log("Time==>",date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
//     },1000)
// }
// clock();

// function timeCounter(){
//     let minutes=0;
//     let seconed=0;
//     setInterval(()=>{
//         seconed=seconed+1;
//         // console.log("minutes",seconed/60);
//         // console.log("seconed",seconed%60);
//         console.log("Time Counter",parseInt(seconed/60)+":"+seconed%60)
//     },1000)
// }
// timeCounter()

function stopClock(time) {
  let seconed = 0;
  const timec = setInterval(() => {
    seconed = seconed + 1;
    // console.log("minutes",seconed/60);
    // console.log("seconed",seconed%60);

    console.log("Time Counter", parseInt(seconed / 60) + ":" + seconed % 60)
    if (parseInt(seconed / 60) == time) {
      clearInterval(timec)
    }
  }, 1000)
 
 setTimeout(()=>{
    clearInterval(timec)
 },time*1000*60)

}

 stopClock(1)




// function alertClock(hr, minutes) {
//   let aler = 0
//   const checkTinme = setInterval(() => {
//     const date = new Date();
//     console.log("Checking Time");

//     if (date.getHours() == hr && date.getMinutes() == minutes & date.getSeconds() == 0) {
//       console.log("Alerm ringing")
//       play()
//     }
//     if (date.getHours() == hr && date.getMinutes() > minutes) {
//       clearInterval(checkTinme);
//       console.log("Stop alerm");
//     }

//   }, 1000)
// }

// alertClock(11, 6)

// let obj = { name: "Anuj", age: 17, edcation: { class: 'BCA', year: '1st Year', duration: 3 } }
// let objC=Object.assign({},obj);

// objC.age=18
// objC.edcation.class="B.Tech"
// console.log("obj",obj);
// console.log("objc",objC);

// function am(b) {
//   var a = 10
//   return function ac() {
//     return a + b
//   }
// }
// // console.log(am(20)());

// function add(a){
//   var count=0;
//   return{
//     increment:function(value){
//       count=count+value
//       return count
//     },
//     decrement:function(value){
//       count=count-value
//       return count
//     },
//     maltiply:function(value){
//       if(count==0){
//         return "your count value is zero"
//       }
//       if(value==0){
//         return "your input value is zero"
//       }
//       count=count*value
//       return count
//     },
//     devide:function(value){
//       if(count==0){
//         return "your count value is zero"
//       }
//       if(value==0){
//         return "your input value is zero"
//       }
//       count=count/value
//       return count
//     },
//     getcount:function(){
//       return count
//     }
//   }
// }
// let fun=add()
//fun.increment(20);
// fun.decrement(2);
// console.log(fun.maltiply(2));
//console.log(fun.devide(2));
// console.log(fun.getcount());

//let myArray = [1];
//console.log(myArray[0]); // outputs 1
//console.log(myArray[5]); // outputs 5
 //myArray.pop(6);

 
 












