var a=[3,4,6,4,3,4,7,8,7,10];
var numb
var m_count = 0
for(let i=0;i<a.length;i++){
    count=0;
    for(let j=1;j<a.length;j++){
        if(a[i]==a[j]){
            count++
        }
        if(count>m_count){
            m_count = count
            numb = a[i]
        }
    }
}
console.log(numb,m_count,"times")
