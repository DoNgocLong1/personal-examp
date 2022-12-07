import React from 'react'
import styled from 'styled-components'
const Pagination = () => {
    const PaginationContainer = styled.div`
        margin-top: 1em;
        display: flex;
        gap: 0.5em;
        justify-content: center;

    `
    const PaginationPage = styled.button`
        width: 2.5em;
        height: 2.5em;
        font-size: 0.7em;
    `

    const PaginationIcon = styled.i`
        font-size: 0.7em;
    `
  return (
    <PaginationContainer>
        <PaginationPage>
          <PaginationIcon className="fas fa-chevron-left"/>
        </PaginationPage>
        <PaginationPage>1</PaginationPage>
        <PaginationPage>2</PaginationPage>
        <PaginationPage>...</PaginationPage>
        <PaginationPage>9</PaginationPage>
        <PaginationPage>10</PaginationPage>
        <PaginationPage>
          <PaginationIcon className="fas fa-chevron-right"/>
        </PaginationPage>

    </PaginationContainer>   
  )
}

export default Pagination