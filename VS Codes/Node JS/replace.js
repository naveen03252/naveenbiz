function fun(a){
    let b = ''
    for(let i=0;i<a.length;i++){
        if(a[i]==='a'){
            b+='t'
        }
        else{
            b+=a[i]
        }
    }
    console.log(b)
}

fun("apple a day ")