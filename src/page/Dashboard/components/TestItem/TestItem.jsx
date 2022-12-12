import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { ThemeContext } from 'page/Exam/ShowContext' 
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
const TestItem = ({data}) => {
    const context = useContext(ThemeContext)
    console.log(data)
  return (  
    <Link to = '/exam'>
        <ItemWrapper onClick={() => {context.setListQuestion(context.quizs[data.id])}}>
            <TestTitle>
                {data.title}
            </TestTitle>
            <TestInfo>
                <TestInfoImg src = {time}/>
                <TestInfoText>
                    {data.time}
                </TestInfoText>

                <TestInfoImg src = {score}/>
                <TestInfoText>
                    200/{data.maxPoint}
                </TestInfoText>
            </TestInfo>
            <TestInfoStar src={star}/>
        </ItemWrapper>
    </Link>
   
  )
}

export default TestItem