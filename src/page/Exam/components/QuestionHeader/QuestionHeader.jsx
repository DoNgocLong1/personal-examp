import React from 'react'
import {Wrapper,
        Tittle,
        CountDown,
        CountDownNumber,
        CountSticky,
        CountDownSticky,
} from './QuestionHeader.styled'
const ExamDetail = () => {
  return (
    <Wrapper>
        <Tittle>Kiểm tra</Tittle>
        <CountDown>Còn lại: 
            <CountDownNumber> 14 </CountDownNumber> phút
            <CountDownNumber> 22 </CountDownNumber> giây
        </CountDown>
        <CountSticky><CountDownSticky/></CountSticky>
    </Wrapper>
  )
}

export default ExamDetail