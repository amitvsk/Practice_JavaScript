let obj2={
    name:"sumit",
    age:19,
    class:"bca",
    // education:{
    //     class:"bca",
    //     year:"2nd semester",
    // }
}
 //let obj2={...obj1};
 let obj1=obj2;
 //let obj2=JSON.stringify(obj1);
// let obj3=JSON.parse(obj2);
//let obj2=Object.assign({}.obj1);
obj2.name="tushar";
// obj3.education.year="3rd semester"
console.log("Orginal object",obj1);
console.log("copy object",obj2);
// console.log("object 3",obj3)
