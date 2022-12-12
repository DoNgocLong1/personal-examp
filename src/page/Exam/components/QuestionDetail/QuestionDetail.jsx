import React,{ useContext} from 'react'
import {ThemeContext} from '../../ShowContext'
import { Wrapper,
        DoQuestion,
        QuestionTitle,
        AnswerList,
        AnswerWrapper,
        AnswerRadio,
        AnswerContent,
        QuestionBtn,
        Button,
        PcQuestionBtn,
        MobileButton
} from './QuestionDetail.styled'
const QuestionDetail = () => {
    const context = useContext(ThemeContext)
    const questionNumber =  context.currentQuestion
    const totalQuestion = context.listQuestion.questions.length
    const thisQuestion = context.listQuestion.questions[questionNumber]
    const {
        question,
        incorrectAnswers,
        correctAnswer,
    } = thisQuestion
    const handleAnswerList = (ans) => {
        console.log(ans)
        let userAnswer = [...context.answerList]
        const findAnswer = userAnswer.find((item) => {
            return item.id === ans.id
        })
        if(findAnswer) {
            console.log('find answer');
            findAnswer.answer = ans.answer
        }else{
            userAnswer = [
                ...userAnswer,
                ans
            ]
        }
      context.setAnswerList(userAnswer)       
    }
    const answer = [correctAnswer,...incorrectAnswers]
    const isChecked = (ans) => {
        const findId = context.answerList.find((item) => {
            return item.id === ans.id && item.answer === ans.answer
        })
        if(findId) return true
        return false
  
    }
    const nextQuestion = (length) => {
        if(context.currentQuestion > length - 2) return context.setCurrentQuestion(0)
        return context.setCurrentQuestion(prev => prev + 1)
    }
    const prevQuestion = () => {
        if(context.currentQuestion < 1) return context.setCurrentQuestion(totalQuestion - 1)
        return context.setCurrentQuestion(prev => prev -1)
    }
  return (
    <Wrapper>
        <DoQuestion>
            <QuestionTitle>
                Câu {context.currentQuestion + 1}. {question}
            </QuestionTitle>
            <AnswerList>

            {answer.map((ans, index) => (
                <AnswerWrapper key={index}>
                    <AnswerRadio 
                    type='radio' 
                    name='A' 
                    id={ans}
                    onChange={() => {handleAnswerList({
                        id: context.currentQuestion,
                        answer: ans
                    })}}
                    checked = {isChecked({                       
                        id: context.currentQuestion,
                        answer: ans                       
                    })}
                    />
                    <AnswerContent htmlFor={ans}>
                         {`${index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"}. ${ans}`}
                    </AnswerContent>
                </AnswerWrapper>
            ))}
                
            </AnswerList>
        </DoQuestion>

        <QuestionBtn>
            <PcQuestionBtn>
                <Button onClick={prevQuestion}>Câu trước</Button>
                <Button onClick={() => nextQuestion(totalQuestion)}>Câu sau</Button>
            </PcQuestionBtn>
            <MobileButton onClick={context.show}>
                Chuyển đến
            </MobileButton>
        </QuestionBtn>

    </Wrapper>
  )
}

export default QuestionDetail