import React from 'react'
import QuestionHeader from '../QuestionHeader/QuestionHeader'
import QuestionDetail from '../QuestionDetail/QuestionDetail'
import {Wrapper,
      
} from './Question.styled'
const Answer = () => {
  
  return (
    <Wrapper>
        <QuestionHeader/>
        <QuestionDetail/>
    </Wrapper>
  )
}

export default Answer