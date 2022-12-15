import React,{useContext}  from 'react'
import Question from './components/Question/Question'
import SideBar from './components/SideBar/SideBar'
import {ExamContainer,
        Layout
} from './Exam.styled'
import {ThemeContext} from './ShowContext'
const Exam = () => {
  const context = useContext(ThemeContext)
  return (
    <ExamContainer>
      <Question/>
      <Layout isShow = {context.showListQuestion} onClick = {context.hide}/>
      <SideBar/>
    </ExamContainer>
  )
}
export default Exam