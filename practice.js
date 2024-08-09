function add() {
    var count=1;
    return {
    incresment:function () {
        count=count+1
        return count
    },
    decresment:function () {
        if (count==0) {
            return count
        } else{
            count=count-1
        }
    },
    getcount:function() {
        return count
}

}

}
let fun=add()

console.log(fun.incresment());
