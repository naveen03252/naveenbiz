function fact(n){
var a =0
var b = 1
console.log(a)
console.log(b)

for(let i=0;i<n;i++){
    var c= a+b
    console.log(c)
    a=b
    b=c
}
}
fact(10)