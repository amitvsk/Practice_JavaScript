// function call2(){
//     return 30
// }
// function call1(b,callback){
//     return  callback() / b
// }
//  console.log (call1(3,call2))


let obj1={
    name:"rajat",
    age:17,
    education:{
        class:"Bca",
        year:"1st year"
    }
}

//  let obj2=obj1
//  let obj2=Object.assign({},obj1);
//  let obj2={...obj1}


let obj2=JSON.stringify(obj1)

let obj3=JSON.parse(obj2)


obj3. name="tushar"
//  obj3.education.class="B.tech 2nd Semester";
 console.log("Orginal object", obj1);
 console.log("Copy object", obj2);
 console.log("object 3",obj3);













