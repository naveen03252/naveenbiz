import { useState } from "react"
import "./Login.css"
import axios from "axios"

export default function Login(){
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    function handleclick(){
        console.log("working")
        let url = "http://localhost:8000/login";
        let request={username:name,passwd:password};
        let header={}
        console.log(request)
        axios.post(url,request,header).then((res)=>{
            console.log(res.data)
        }).catch()
    }
    return<>
    <div className = "login_main">
        <div className = "login_inner">
        <label>username</label>
        <input type="text" placeholder="username" onChange={(e)=>{setName(e.target.value)}}/>
        <label>password</label>
        <input type = "password" placeholder="passsword" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleclick}>login</button>
        </div>
        
    </div>
    </>
}