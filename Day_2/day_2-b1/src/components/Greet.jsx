import React from 'react'

// export default function Greet({name,age,city}) {
//   return (
//     <div>
//         <h2>Hello {name}, Welcome to Day 2.</h2>
//         <p>Age:{age}</p>
//         <h3>City:{city}</h3>
//     </div>
//   )
// }

export default function Greet(props) {
    // let {name,age,city}=props
    console.log("props",props)
    // console.log(name,city,age)
  return (
    <div>
        <h2>Hello {props.name}, Welcome to Day 2.</h2>
        <p>Age:{props.age}</p>
        <h3>City:{props.city}</h3>
    </div>
  )
}