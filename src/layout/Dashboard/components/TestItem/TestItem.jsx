import React from 'react'
import time from '../../../../assets/images/time.png'
import score from '../../../../assets/images/score.png'
import star from '../../../../assets/images/star.png'
import {
    ItemWrapper,
    TestTitle,
    TestInfo,
    TestInfoImg,
    TestInfoText,
    TestInfoStar
} from './TestItem.styled'
const TestItem = () => {
  return (
    <ItemWrapper>
        <TestTitle>
            Kiểm tra
        </TestTitle>
        <TestInfo>
            <TestInfoImg src = {time}/>
            <TestInfoText>
                7 Phút
            </TestInfoText>

            <TestInfoImg src = {score}/>
            <TestInfoText>
                200/250 Điểm
            </TestInfoText>
        </TestInfo>
        <TestInfoStar src={star}/>
    </ItemWrapper>
  )
}

export default TestItem