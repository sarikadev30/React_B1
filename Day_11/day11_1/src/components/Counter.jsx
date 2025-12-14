import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const count =useSelector((state)=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Count: {count} </h2>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREASE + </button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREASE - </button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET </button>


    </div>
  )
}
