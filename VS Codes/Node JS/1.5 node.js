function merge(a,b){
    for(var i=0;i<b.length;i++){
            if(a.includes(b[i])){
                continue
            }
            else{
                a.push(b[i])
            }
    }
    console.log(a)

}

var a=[1,2,3,4,5]
var b=[6,5,4,3,7]
merge(a,b)