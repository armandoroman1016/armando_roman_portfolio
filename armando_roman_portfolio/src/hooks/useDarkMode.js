  
import React, { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const useDarkMode = ( bool ) => {

    const [darkMode, setDarkMode] = useLocalStorage('dark_mode', {is_on: bool})

    return [ darkMode, setDarkMode ]

}

export default useDarkMode