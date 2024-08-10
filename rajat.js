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

// console.log(user);


function login (email,passward){
   if(!email) {
    return ("please enter your email")
   }
   if(!passward){
    return ("please enter your passward")
   }
   if(email=="rajatjha20070@gmail.com"){
    if(passward=="90580"){
        return ("succesfully login")
    }else{ return ("passward is incorect" )}

   }else{
return ("email id is not ragister")
   }
}

console.log(login("rajatjha20070@gmail.com","90580"));















