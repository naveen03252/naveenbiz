function leap(a,b){
    var leap_yr = []
    for(let i = a;i<b;i++){
        if((i%4==0 && i%100 !=0) || i%400==0){
            leap_yr.push(i)
        }
    }
    console.log(leap_yr)
}

leap(1990,2022)