import './App.css'
import React from 'react'
import Greet from './components/Greet'
import { useState } from 'react'
import Counter from './components/Counter'
import User from './components/User'
import Vegetables from './components/Vegetables'


function App() {
  // const[name,setName]=useState("Joe")
  // const[age,setAge]=useState(23)
  // const[city,setCity]=useState("NY")
  const [count,setCount]=useState(0)
  // const [login,setLogin]=useState(false)
  // const[fruits,setFruits]=useState(["Apple","Banana","Mango","Kiwi","Grapes","Watermelon"])
  return (
    <>
      {/* <h1>App Component</h1>
      <Greet name={name} age={age} city={city}/> */}
      <div>
        <h1>Count: {count}</h1>
        <Counter setCount={setCount} count={count}/>
      </div>
      {/* <User login={login}/> */}
      <div>
        {/* <h2>{fruits[0]}</h2>
        <h2>{fruits[1]}</h2>
        <h2>{fruits[2]}</h2> */}
        {/* {fruits.map((el,index)=>{
          return <h2 key={index}>{el}</h2>
        })} */}
      </div>
      {/* <Vegetables/> */}
      
    </>
  )
}



export default App
