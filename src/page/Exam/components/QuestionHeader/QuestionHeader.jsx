import React, {useContext} from 'react'
import {ThemeContext} from '../../ShowContext'
import {Wrapper,
        Tittle,
        CountDown,
        CountDownNumber,
        CountSticky,
        CountDownSticky,
} from './QuestionHeader.styled'
const ExamDetail = () => {
  const context = useContext(ThemeContext)
  return (
    <Wrapper>
        <Tittle>{context.listQuestion.title}</Tittle>
        <CountDown>Còn lại: 
            <CountDownNumber> 14 </CountDownNumber> phút
            <CountDownNumber> 22 </CountDownNumber> giây
        </CountDown>
        <CountSticky><CountDownSticky/></CountSticky>
    </Wrapper>
  )
}

export default ExamDetail