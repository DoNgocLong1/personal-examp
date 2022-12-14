import React, {useContext} from 'react'
import { ThemeContext } from 'page/Exam/ShowContext' 
import { Link } from 'react-router-dom'
import {
    FinishPage,
    FinishBoard,
    FinishInfo,
    FinishBoardTitle,
    InfoContainer,
    Wrapper,
    FinishContent,
    FinishResult,
    Total,
    FinishBtn
} from './Finish.styled'
const Finish = () => {
    let countCorrectAnswer = 0
    let countIncorrectAnswer = 0
    let countNotAnswer = 0
    let totalScore = 0
    const context = useContext(ThemeContext)
    const questions = context.listQuestion.questions
    const maxPoint = context.listQuestion.maxPoint
    const answers = context.answerList
    const totalQuestion = questions.length
    console.log(questions)
    console.log(answers)
    questions.forEach((question, questionIndex) => {
        const checkIsAnswer = answers.some((answer) => {
            return questionIndex === answer.id
        })
        if(!checkIsAnswer) countNotAnswer++
        const checkCorrectAnswer = answers.some((answer) => {
            return answer.answer === question.correctAnswer && questionIndex === answer.id
        })
        if(checkCorrectAnswer) countCorrectAnswer++
    })
    countIncorrectAnswer = totalQuestion - countNotAnswer - countCorrectAnswer
    totalScore = (maxPoint/totalQuestion) * countCorrectAnswer
    console.log(countCorrectAnswer);
    console.log(countIncorrectAnswer);
    console.log(countNotAnswer);

  return (
    <FinishPage>
        <FinishBoard>
            <FinishBoardTitle> {context.listQuestion.title} </FinishBoardTitle>
            <FinishInfo>
                <InfoContainer>

                    <Wrapper>
                        <FinishContent>Số câu trả lời đúng: </FinishContent>
                        <FinishResult>{countCorrectAnswer}</FinishResult>
                    </Wrapper>

                    <Wrapper>
                        <FinishContent>Số câu trả lời sai: </FinishContent>
                        <FinishResult>{countIncorrectAnswer}</FinishResult>
                    </Wrapper>

                    <Wrapper>
                        <FinishContent>Số câu chưa trả lời : </FinishContent>
                        <FinishResult>{countNotAnswer}</FinishResult>
                    </Wrapper>

                    <Wrapper>
                        <FinishContent>Tổng số câu hỏi: </FinishContent>
                        <FinishResult>{totalQuestion}</FinishResult>
                    </Wrapper>

                </InfoContainer>  

                <Total>
                <FinishContent>Điểm số: </FinishContent>
                        <FinishResult>{totalScore}/{maxPoint}</FinishResult>
                </Total>
            </FinishInfo>
            <Link to='/dashboard'>
                <FinishBtn>Dashboard</FinishBtn>
            </Link>
        </FinishBoard>
    </FinishPage>
  )
}

export default Finish