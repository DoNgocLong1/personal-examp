import React, { useContext, useEffect, useState } from 'react'
import TestItem from './TestItem/TestItem'
import { ThemeContext } from 'page/Exam/ShowContext'
import {TestListContainer, EmptyItem} from './TestList.styled'
const TestList = ({data, rule, search}) => {
  
  let dataList = []
  let copyArr = [...data]
  switch(rule) {
    case 'all' :
      dataList = copyArr
      break
    case 'easy' :
      dataList = copyArr.filter((item) => {
        return item.difficulty === 'easy'
      })
      break
    case 'medium' :
      dataList = copyArr.filter((item) => {
        return item.difficulty === 'medium'
      })
      break
    case 'hard':
      dataList = copyArr.filter((item) => {
        return item.difficulty === 'hard'
      })
    break
    default: dataList = copyArr
  }
    const context = useContext(ThemeContext)
    
    const offsetList = dataList.slice(context.startItem, context.lastItem)
  return (
    <TestListContainer>
        {offsetList.map((item, index) => (
        <TestItem key={index} data = {item} />
        ))}
    </TestListContainer>
  )
}

export default TestList