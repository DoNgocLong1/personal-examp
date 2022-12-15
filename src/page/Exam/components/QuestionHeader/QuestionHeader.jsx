import React, {useContext, useState, useEffect, useMemo} from 'react'
import {ThemeContext} from '../../ShowContext'
import { useNavigate } from 'react-router-dom'
import {Wrapper,
        Tittle,
        CountDown,
        CountDownNumber,
        CountSticky,
        CountDownSticky,
} from './QuestionHeader.styled'
const ExamDetail = ({quizTime}) => {
  const context = useContext(ThemeContext)
  const caculateMinutes = useMemo(() => Math.floor(quizTime / 60),[quizTime])
  const caculateSecond = useMemo(() => quizTime % 60 ,[quizTime]) 
  const [minutes, setMinutes] = useState(caculateMinutes)
  const [seconds, setSeconds] = useState(caculateSecond)
  const timeRemaining = minutes*60 + seconds
  const percentTimeRemaining = (timeRemaining/quizTime)*100
  const navigate = useNavigate()
  useEffect(() => {
      const coutDowmnInterval = setInterval(() => {
        if(seconds === 0) {
          setMinutes(prev => prev - 1)
          setSeconds(60)
        }
        setSeconds(prev => prev - 1)
      },1000)
      return () => clearInterval(coutDowmnInterval)
    },[seconds])
  useEffect(() => {
    if(timeRemaining === 0) {
        navigate('/finish')
    }
  },[navigate, timeRemaining])
 console.log(quizTime);
  return (
    
    <Wrapper>
        <Tittle>{context.listQuestion.title}</Tittle>
        <CountDown>Còn lại:
            <CountDownNumber> {minutes} </CountDownNumber> phút
            <CountDownNumber> {seconds} </CountDownNumber> giây
        </CountDown>
        <CountSticky>
          <CountDownSticky 
          time = {quizTime}
          />
        </CountSticky>
    </Wrapper>
  )
}

export default ExamDetail