import styled from "styled-components"

export const TestListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 2em;
    column-gap: 2em;
    font-size: 17px;
    height: 100%;
    @media(max-width:63.9375em){
      grid-template-columns: 1fr; 
      overflow-y: scroll;
    }
    @media(max-width:46.1875em){
        
    }
`

export const EmptyItem = styled.div`
  width: 100%;
  font-size: 1em;
  text-align: center;
`