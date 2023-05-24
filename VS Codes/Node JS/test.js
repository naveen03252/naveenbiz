function test2(){
    console.log("test2")
}

async function callfn(){
     
    let pr= await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("10")
        },2000)
    })
   
    console.log(pr)
    test2()
}
callfn()
test2()