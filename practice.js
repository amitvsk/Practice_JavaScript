// function add() {
//     var count=1;
//     return {
//     incresment:function () {
//         count=count+1
//         return count
//     },
//     decresment:function () {
//         if (count==0) {
//             return count
//         } else{
//             count=count-1
//         }
//     },
//     getcount:function() {
//         return count
// }

// }

// }
// let fun=add()

// console.log(fun.incresment());





// var obj= {
//     namea: "anuj",
//     class: "Bca",
//     age: "24",
//     education:{
// year: "first semster"
//     }
// }

//  let obj1=JSON.stringify(obj);
// let obj3=JSON.parse(obj1);
// let obj1=Object.assign({},obj)



// console.log("copy object",obj);
// console.log("copy object",obj1);


// obj1.namea="aarav"
// obj.education.year="pass"




var obj= {
    namea: "anuj",
    class: "Bca",
    age: "24",
    education:{
year: "first semster"
    }
}


// obj1=obj
// let obj1=Object.assign({},obj)
let obj1={...obj};


console.log("og object",obj);
console.log("copy object",obj1);
obj1.namea="aarav"

