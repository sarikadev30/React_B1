import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
        <Link to="/"><p style={{padding:"2px"}}>Home</p></Link>
        <Link to="/products"><p style={{padding:"2px"}}>Products</p></Link>
    </div>
  )
}
