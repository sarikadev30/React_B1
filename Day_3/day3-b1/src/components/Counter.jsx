import React, { useEffect, useState } from 'react'

export default function Counter() {
    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(0)

    // Mounting Phase
    useEffect(()=>{
        console.log("Counter Mounted")
        // Unmounting Phase
        return ()=>{
            console.log("Counter Unmounted")
        }
    },[])

    // Updating Phase
    useEffect(()=>{
        console.log("Counter Updating",count)
    },[count,count2])

    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        // setCount(count-1)
        setCount2(count2-1)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <h1>Count2:{count2}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
