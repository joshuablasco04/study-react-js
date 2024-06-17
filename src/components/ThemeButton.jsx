import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeButton = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
        <h1>{theme}</h1>
        <button onClick={toggleTheme}>Toogle Theme</button>
    </div>
  )
}

export default ThemeButton