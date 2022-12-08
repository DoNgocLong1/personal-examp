import React,{ useContext} from 'react'
import {ThemeContext} from '../../ShowContext'
import { Wrapper,
        DoQuestion,
        QuestionTitle,
        AnswerList,
        AnswerWrapper,
        AnswerCheckbox,
        AnswerContent,
        QuestionBtn,
        Button,
        PcQuestionBtn,
        MobileButton
} from './QuestionDetail.styled'
const QuestionDetail = () => {
    const contex = useContext(ThemeContext)
  return (
    <Wrapper>
        <DoQuestion>
            <QuestionTitle>
                Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm
            </QuestionTitle>
            <AnswerList>
                <AnswerWrapper>
                    <AnswerCheckbox type = 'checkbox' name='A'  id='A' />
                    <AnswerContent htmlFor='A' >A. 12 Ngày nếu làm đủ cả năm</AnswerContent>
                </AnswerWrapper>

                <AnswerWrapper>
                    <AnswerCheckbox type = 'checkbox' name='B' id='B' />
                    <AnswerContent htmlFor='B' >B. 12 Ngày nếu làm đủ cả năm</AnswerContent>
                </AnswerWrapper>

                <AnswerWrapper>
                    <AnswerCheckbox type = 'checkbox' name='C' id='C' />
                    <AnswerContent htmlFor='C' >C. 12 Ngày nếu làm đủ cả năm</AnswerContent>
                </AnswerWrapper>

                <AnswerWrapper>
                    <AnswerCheckbox type = 'checkbox' name='D' id='D' />
                    <AnswerContent htmlFor='D' >D. 12 Ngày nếu làm đủ cả năm</AnswerContent>
                </AnswerWrapper>
            </AnswerList>
        </DoQuestion>

        <QuestionBtn>
            <PcQuestionBtn>
                <Button>Câu trước</Button>
                <Button>Câu sau</Button>
            </PcQuestionBtn>
            <MobileButton onClick={contex.show}>
                Chuyển đến
            </MobileButton>
        </QuestionBtn>

    </Wrapper>
  )
}

export default QuestionDetail