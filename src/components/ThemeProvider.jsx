import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemProvider