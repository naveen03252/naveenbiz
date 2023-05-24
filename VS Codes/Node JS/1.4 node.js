
function rev_num(a){
    var rem=0
    var reversed = 0
    while(a !=0){
        rem = a%10
        reversed = reversed*10 + rem
        a = Math.floor(a/10)
    }
 console.log(reversed)
}

rev_num(356)