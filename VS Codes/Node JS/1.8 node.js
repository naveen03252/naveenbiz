function prime(n){
    var count=0
    for(let i=1;i<n+1;i++){
        if(n%i==0){
            count=count+1
        }
    }
    if(count==2){
        console.log("prime")
    
    }
    else{
        console.log("not a prime")
    }
}
prime(8)