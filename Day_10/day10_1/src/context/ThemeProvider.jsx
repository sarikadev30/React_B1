import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemeProvider({children}) {
    const[theme,setTheme]=useState("dark")

    const toggleTheme=()=>{
        setTheme((prev)=>(prev=="dark"?"light":"dark"))
    }
    const value={
        theme,
        toggleTheme,
    }

  return (
    <ThemeContext.Provider value={value}>
        <div className={theme=="dark"?"dark-theme":"light-theme"}>
            {children}
        </div>
    </ThemeContext.Provider>
  )
}
