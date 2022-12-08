import React from 'react'
import styled from 'styled-components'
import TestItem from './TestItem/TestItem'
const TestList = () => {
    const TestList = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 2em;
    column-gap: 2em;
    font-size: 17px;
    @media(max-width:63.9375em){
      grid-template-columns: 1fr; 
      overflow-y: hidden;
    }
    @media(max-width:46.1875em){
        
    }
    `
  return (
    <TestList>
        {Array.from({ length: 6 }, (_, i) => i).map((item, index) => (
        <TestItem key={index} />
        ))}
    </TestList>
  )
}

export default TestList