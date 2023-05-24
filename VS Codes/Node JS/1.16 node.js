function primeupto(n){
    var a = []
    for(let i =0;i<=n;i++){
        count = 0
        for(let j=1;j<=i;j++){
            if(i%j==0){
                count=count+1
            }
        }
        if(count==2){
            a.push(i)
        }
    }
    console.log(a)
}
primeupto(100)