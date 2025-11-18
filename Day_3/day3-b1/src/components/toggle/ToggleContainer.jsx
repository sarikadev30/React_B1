import React, { useState } from 'react'
import ToggleButton from './ToggleButton'

export default function ToggleContainer() {
    const[mode,setMode]=useState(false)
    const handleToggle=()=>{
        setMode(!mode)
    }
  return (
    <div>
        <h2>Theme Toggle</h2>
        <h3>Status: {mode?"Light Mode":"Dark Mode"}</h3>
        <ToggleButton mode={mode} onToggle={handleToggle}/>
    </div>
  )
}
