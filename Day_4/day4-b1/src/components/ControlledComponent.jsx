import { useState } from "react"

export default function ControlledComponent() {
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const handleClick=(e)=>{
        e.preventDefault()
        console.log("Hi Submitted")
    
    }
  return (
    <div>
        <form method="get" action="">
            <input type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)} value={name} required/>
            <input type="password" placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <button onClick={handleClick} type="submit">Submit</button>
            <button onClick={()=>{setEmail(""); setName(""); setPassword("")}} >Clear</button>

            <h3>{name}</h3>
            <h3>{password}</h3>
            <h3>{email}</h3>

        </form>
    </div>
  )
}
