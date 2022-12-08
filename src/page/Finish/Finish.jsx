import React from 'react'
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
  return (
    <FinishPage>
        <FinishBoard>
            <FinishBoardTitle> Kiểm tra bảo mật an toàn thông tin 2 </FinishBoardTitle>
            <FinishInfo>
                <InfoContainer>

                    <Wrapper>
                        <FinishContent>Số câu trả lời đúng: </FinishContent>
                        <FinishResult>12</FinishResult>
                    </Wrapper>

                    <Wrapper>
                        <FinishContent>Số câu trả lời sai: </FinishContent>
                        <FinishResult>3</FinishResult>
                    </Wrapper>

                    <Wrapper>
                        <FinishContent>Số câu chưa trả lời : </FinishContent>
                        <FinishResult>1</FinishResult>
                    </Wrapper>

                    <Wrapper>
                        <FinishContent>Tổng số câu hỏi: </FinishContent>
                        <FinishResult>16</FinishResult>
                    </Wrapper>

                </InfoContainer>  

                <Total>
                <FinishContent>Điểm số: </FinishContent>
                        <FinishResult>120/160</FinishResult>
                </Total>
            </FinishInfo>
            <FinishBtn>Dashboard</FinishBtn>
        </FinishBoard>
    </FinishPage>
  )
}

export default Finish