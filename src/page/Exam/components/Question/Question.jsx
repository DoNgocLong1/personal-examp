import React, { useContext} from 'react'
import QuestionHeader from '../QuestionHeader/QuestionHeader'
import QuestionDetail from '../QuestionDetail/QuestionDetail'
import { ThemeContext } from 'page/Exam/ShowContext'
import {Wrapper,
      
} from './Question.styled'
const Answer = () => {
  const context = useContext(ThemeContext)
  const quizTime = +context.listQuestion.time
  
  return (
    <Wrapper>
        <QuestionHeader
        quizTime = {quizTime}
        />
        <QuestionDetail/>
    </Wrapper>
  )
}

export default Answer