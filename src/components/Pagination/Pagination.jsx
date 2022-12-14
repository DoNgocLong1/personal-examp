import React, {useContext} from 'react'
import {
  PaginationContainer,
  PaginationPage,
  PaginationIcon
} from './Panigation.styled'
import { ThemeContext } from 'page/Exam/ShowContext' 
const Pagination = () => {
  const context = useContext(ThemeContext)
  console.log(context.quizs.length);
  const paginationLength = Math.ceil(context.quizs.length/6)
  const handleNextBtn = () => {
    context.setStartItem(prev => prev + 6)
    context.setLastItem(prev => prev + 6)
  }
  const changeOffsetItemByNumber = (index) =>{
      const offset = index * 6
      context.setStartItem(offset)
      context.setLastItem(offset + 6)
  }
  const handlePrevBtn = () => {
    context.setStartItem(prev => prev - 6)
    context.setLastItem(prev => prev - 6)     
  }
  
  return (
    <PaginationContainer>
        <PaginationPage 
        onClick={handlePrevBtn}
        isHide={context.startItem === 0}
        >
          <PaginationIcon className="fas fa-chevron-left"/>
        </PaginationPage>
        {Array(paginationLength).fill(0).map((_,index) => (
          <PaginationPage 
          key={index}
          onClick={() => changeOffsetItemByNumber(index)}>{index + 1}</PaginationPage>
        ))}
        <PaginationPage 
        onClick={handleNextBtn}
        isHide={context.lastItem > context.quizs.length}

        >
          <PaginationIcon className="fas fa-chevron-right"/>
        </PaginationPage>

    </PaginationContainer>   
  )
}

export default Pagination