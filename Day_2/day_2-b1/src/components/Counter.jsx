import React from 'react'

export default function Counter(props) {
    let {count,setCount}=props
    function increaseCount(){
        // setCount(count+1) // 1
        // setCount(count+1) // 1
        // setCount(count+1) // 1
        // setCount(count+1) // 1
        // setCount(count+1) // 1
        // setCount(count+1) // 1
        setCount(count=> count+1)
        setCount(count=> count+1)
        setCount(count=> count+1)
        setCount(count=> count+1)
        setCount(count=> count+1)
        setCount(count=> count+1)
    }
  return (
    <div>
        <button onClick={increaseCount}>Increase</button>
    </div>
  )
}
