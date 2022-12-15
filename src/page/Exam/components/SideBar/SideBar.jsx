import React,{ useContext} from 'react'
import { ThemeContext } from 'page/Exam/ShowContext'
import { Link } from 'react-router-dom'
import {Wrapper,
        QuestionContainer,
        QuestionNumber,
        Button,
        CurrentQuestionNumber,
} from './SideBar.styled'
const SideBar = () => {
  const context = useContext(ThemeContext)
  const totalQuestion = context.listQuestion.questions.length
  const currentQuestion = context.currentQuestion
  const listAnswered = context.answerList
  const isCheckAnswered = (index) => {
    const includeAnswer = listAnswered.find((item) => {
      return item.id === index
    }) 
    if(includeAnswer) return true
    return false
  }
  return (
    <Wrapper isShow = {context.showListQuestion}>
      <QuestionContainer >
        {Array.from({ length: totalQuestion }, (_, i) => i).map((item, index) => (
          index === currentQuestion ?
          <CurrentQuestionNumber key = {index}>{index + 1}</CurrentQuestionNumber>
          : 
          <QuestionNumber  
          isCheck = {isCheckAnswered(index)}
          key = {index} 
          onClick = {() => {
            context.setCurrentQuestion(index)
            context.hide()
          } }> {index + 1} 
          </QuestionNumber>
        ))}
        
      </QuestionContainer>
      <Link to='/finish'>
        <Button>Nộp bài</Button>
      </Link>
    </Wrapper>
  )
}

export default SideBar