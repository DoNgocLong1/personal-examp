import React, { useState } from 'react'
import styled from 'styled-components'
import TestItem from './TestItem/TestItem'
const TestList = ({data}) => {
    const TestList = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 2em;
    column-gap: 2em;
    font-size: 17px;
    height: 100%;
    @media(max-width:63.9375em){
      grid-template-columns: 1fr; 
      overflow-y: hidden;
    }
    @media(max-width:46.1875em){
        
    }
    `
    const [startItem, setStartItem] = useState(0)
    const [LastItem, setLastItem] = useState(6)
    const offsetList = data.slice(startItem,LastItem)

  return (
    <TestList>
        {offsetList.map((item, index) => (
        <TestItem key={index} data = {item} />
        ))}
    </TestList>
  )
}

export default TestList