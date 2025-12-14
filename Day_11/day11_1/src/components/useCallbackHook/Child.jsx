import React from 'react'

export default React.memo(function Child({onclick}) {
    console.log("Child is rendered")
  return (
    <div>
        <button onClick={onclick}>Increase</button>
    </div>
  )
})
