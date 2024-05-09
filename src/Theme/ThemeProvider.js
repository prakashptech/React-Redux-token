import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeProvider({Children}) {

    const [ theme, setTheme] = useState('light');
    const ToggleTheme = () =>{
        setTheme(prevtehem =>prevtehem === 'light' ? 'dark' : 'light')
    }
  return (
    <ThemeContext.Provider value={{theme, ToggleTheme}}>
        {Children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider