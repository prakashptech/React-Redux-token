import React, { createContext, useContext } from 'react'


export const ThemeContext = createContext();

export  const Usetheme = () => {
 return useContext(ThemeContext) 
}
