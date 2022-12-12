//file tạo ra ThemeContext và ThemeProvider
import {useState, createContext}  from 'react'
import quizs from './data'
const ThemeContext = createContext()
function ShowProvider ({children}) {
    const [showListQuestion, setShowListQuestion] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentListQuestion, setCunrentListQuesetion] = useState(0)
    const [listQuestion, setListQuestion] = useState(quizs[0])
    const [answerList, setAnswerList] = useState([])
    const show = () => {
        setShowListQuestion(true) 
    }
    const hide = () => {
        setShowListQuestion(false) 
    }
    console.log(answerList)
    const value = {
        quizs,
        showListQuestion,
        currentQuestion,
        setCurrentQuestion,
        show,
        hide,
        currentListQuestion,
        setCunrentListQuesetion,
        listQuestion,
        setListQuestion,
        answerList, 
        setAnswerList
    }
    return (
        <ThemeContext.Provider value = {value}>
            {children}
        </ThemeContext.Provider>
    )
}
export{ThemeContext, ShowProvider}