import React from 'react'
import { useContext, useState } from 'react'

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

const ThemeContext = React.createContext(themes.light)  

export default function UseContext() {

    const [style, setStyle] = useState('light')

    function toggleStyle() {
        console.log('change style')
        setStyle({themes: "light"})
    }

    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
            <button onClick={toggleStyle}>Change</button>
        </ThemeContext.Provider>
    )
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton() {
    const theme = useContext(ThemeContext)  
    return (   
         <button style={{ background: theme.background, color: theme.foreground }}>      
         I am styled by theme context!   
        </button>  
    )
}
