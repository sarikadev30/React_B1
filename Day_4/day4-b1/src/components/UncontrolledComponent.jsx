import React, { useRef, useState } from 'react'

export default function UncontrolledComponent() {
    const[name,setName]=useState("")
    const inputR=useRef(null)
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(inputR.current.value)
        setName(inputR.current.value)

    }
  return (
    <div>
        <form>
            <input type='text' ref={inputR} required/>
            <button onClick={handleClick}>Submit</button>
        </form>
        <h3>{name}</h3>
    </div>
  )
}
