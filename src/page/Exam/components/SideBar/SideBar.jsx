import React,{ useContext} from 'react'
import {ThemeContext} from '../../ShowContext'
import {Wrapper,
        AnswerContainer,
        AnswerNumber,
        Button
} from './SideBar.styled'
const SideBar = () => {
  const contex = useContext(ThemeContext)
  return (
    <Wrapper isShow = {contex.showListQuestion}>
      <AnswerContainer >
        {Array.from({ length: 20 }, (_, i) => i).map((item, index) => (
          <AnswerNumber key = {index}>{index + 1}</AnswerNumber>
        ))}
      </AnswerContainer>
      <Button>Nộp bài</Button>
    </Wrapper>
  )
}

export default SideBar