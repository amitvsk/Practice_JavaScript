function call2(){
    return 30
}
function call1(b,callback){
    return  callback() / b
}
 console.log (call1(3,call2))

