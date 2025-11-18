import { useState } from "react"

export const Counter:React.FC=()=>{
  const[count,setCount]=useState<number>(0)
  return (
    <div>
      <h1>Counter App </h1>
      <h2>Count : {count}</h2>
      <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>count>0?setCount(count-1):""}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  )
}
