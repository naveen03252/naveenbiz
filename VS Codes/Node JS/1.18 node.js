var a = "yesterday, I went for a walk in the park and saw  a yellow butterfly"
var b = ""
for(let i=0;i<a.length;i++){
    if(a[i]==='y'){
        b+='a'
    }
    else{
        b += a[i]
    }
}
console.log(b)

