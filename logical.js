

const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", age: 34, balance: 3000, isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 22, balance: 7000, isActive: true },
    { id: 4, name: "Diana", email: "diana@example.com", age: 29, balance: 4000, isActive: false },
    { id: 5, name: "Eve", email: "eve@example.com", age: 35, balance: 10000, isActive: true },
  ];
  function user(Users) {
  let result=[]
    let check=users.filter((ele)=>ele.isActive)  //question 1
  //   
      result.activeuserslist=check
      result.count=check.length
      return result
    }
  
  
  console.log(user(users));
  
  // function balanceinquary(users) {           //question 2
  //   // console.log("total balance",users.reduce((accumulator,currentValue)=> accumulator+ currentValue.balance,0))
    
  
  // const totalbalance=users.reduce((accumulator,currentValue)=> accumulator+ currentValue.balance,0)
  // console.log("total balance",totalbalance);
  // }
  // console.log(balanceinquary(users));
  
  
  // function person(users) {
  //   result=users.find((ele)=>ele.email=="charlie@example.com")
  //   if (result) {
  //     console.log("information matched",result);      // question 3
  //   }else{
  //     return "no user found"
  //   }
  // }
  // console.log(person(users));
  
  
  // function younger(users) {
  //   console.log("youger users",users.sort((a,b)=>{             //question 4
  //     return a.age-b.age
  //   }));
  //   console.log("older users",users.sort((a,b)=>{
  //     return b.age-a.age
  //   }));
    
    
  // }
  // console.log(younger(users));
  
  
  // function add(users) {
    
  
  // let increse=users.map((ele)=>ele.balance*10/100+ele.balance);
  //           //question 5 !!!!!!!!!!!!!!!!!!!!!!!\
  // console.log(increse);
  
  
  // }
  // console.log(add(users));
  
  
  
  
  
  // function check(users) {
  //   let result=users.some((item)=>{      //function me coundition lagana nahi 
  //     return item.age<25                     //question 6
  //   });
  //   if (users.age>25) {
  //     console.log("yes",result);
      
  //   } else {
  //     console.log("no");
      
  //   }
  //   // console.log("under of 25 age",result);
    
  // }
  // console.log(check(users));
  
  
  // console.log(users.every((ele)=>ele.balance>2000));   //question 7 
  // function user(users) {
  //   let verifyusers=[]
  //   let verify=users.every((ele)=>ele.balance>2000)
  //   verifyusers.result=verify
  //   return verifyusers
  // }
  // console.log(user(users));
  
  
  
  
  // console.log(users.map((ele)=>ele.name));       //question 8
  // function user(users) {
  //   let result=[]  
  // let check=users.map((ele)=>ele.name);
  // result.namenewarray=check
  // return result
  // }
  // console.log(user(users));
  
  
  
  
  
  // function check(users) {
  //   let result=users.filter((ele)=>ele.balance>=5000)      //question 9
    
  //   console.log(result,"5000 or more count",result.length);
    
  // }
  // console.log(check(users));
  
  
  // function matching(users) {
  //   let result=[]
  //   let check=users.filter((ele)=>ele.id!=3)          // question 10
  //   result.newarray=check
  
  //   return result
  // }
  // console.log(matching(users));
  
  
  











  
// function massage(time) {
//   let minuet=0
//   let second=0
//   const  display= setInterval(() => {         //question 1
//     second=second+1
// console.log(parseInt(second/60)+":"+second%60);

//   }, 1000);
//   setTimeout(() => {
//     console.log("Hello,World!");
//     clearInterval(display)
//   }, time*1000);
// }
// massage(3)



// function add(a,b) {
//   setTimeout(() => {        //question 3
//     console.log(a+b);
    
//   }, 5000);
// }
// add(2,2)
  


function timmer(time) {
  // let minuet=5
  let second=60
  let timea=setInterval(() => {
    second=second-1
    // minuet=minuet-1
    console.log(parseInt(second%60));
    
  }, 1000);
setTimeout(() => {
  console.log("time is over");
  clearInterval(timea)
  
}, time*1000);

}

timmer(10)




// function multiply(a,b) {
//   setTimeout(() => {        //question 5
//     console.log(a*b);
    
//   }, 4000);
// }
// multiply(2,5)


// function time(time) {
//   let timea=setInterval(() => {
//     let date=new Date()
//    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
    
//   }, 2000);
//   setTimeout(() => {
//     clearInterval(timea)
//     console.log("time is over");
    
//   }, time*1000);
// }
// time(5)
