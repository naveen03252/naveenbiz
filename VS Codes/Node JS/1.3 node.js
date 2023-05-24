var a = [12,43,65,34,99,45]
var max = 0
var min = a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        max = a[i]
    }
}
for(let j = 1;j<a.length;j++){
    if(a[j]<min){
        min=a[j]
    }
}
console.log(max)
console.log(min)