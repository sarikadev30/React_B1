import { useState } from "react"

export default function SimpleFormValidation() {
    const [fname,setfName]=useState("")
    const [email,setEmail]=useState("")
    
    const handleClick=(e)=>{
        e.preventDefault()
        // if(name.trim()===""){
        //     console.warn("Name is required")
        // }
        // else{
        //     alert(`formSubmitted ${name}`)
        // }
        console.log(fname.split(" "))
        if(fname.split(" ")[0]){
            // string literal
            alert(`formSubmitted ${fname.split(" ")[0]}`)
        }
        if(!email.includes("@")){
            console.warn("Use @ in email address")
        }
        else{
            alert(`formSubmitted ${fname.split(" ")[0]} - ${email}`)
        }


    }
  return (
    <div>
        <form onSubmit={handleClick}>
        <input type="text" value={fname} onChange={(e)=>setfName(e.target.value)}/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
        </form></div>
  )
}
