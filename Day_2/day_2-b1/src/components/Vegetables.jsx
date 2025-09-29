import { useState } from 'react'

export default function Vegetables() {
  const[veges,setVeges]=useState(["Potato","Onion","Ladyfinger","Carrot"])
  
  function addRed(){
    veges.push("Reddish")
    console.log("after pushing",veges)
    setVeges(veges)
  }
  function addRedC(){
    let x=[...veges,"Reddish"]
    setVeges(x)
    console.log("new Reference",veges)
  }
  return (
    <div>
      <h1>Vegetables</h1>
      <ul>{veges.map((el,index)=>{
        return <li key={index}>{el}</li>
      })}</ul>
      <button onClick={addRed}>Add Reddish</button>
      <button onClick={addRedC}>Add Reddish Correctly</button>
    </div>
  )
}

