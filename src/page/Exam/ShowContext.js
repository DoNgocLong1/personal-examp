//file tạo ra ThemeContext và ThemeProvider
import {useState, createContext}  from 'react'
const ThemeContext = createContext()
function ShowProvider ({children}) {
    const [showListQuestion, setShowListQuestion] = useState(false)
    const show = () => {
        setShowListQuestion(true) 
    }
    const hide = () => {
        setShowListQuestion(false) 
    }
    const value = {
        showListQuestion,
        show,
        hide
    }
    return (
        <ThemeContext.Provider value = {value}>
            {children}
        </ThemeContext.Provider>
    )
}
export{ThemeContext, ShowProvider}