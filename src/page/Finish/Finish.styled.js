import styled from "styled-components";

export const FinishPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #C4C4C4;
    @media(max-width:46.1875em){
        padding: 0 0.5em;
    }
`

export const FinishBoard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em 2em;
    gap: 3em;
    align-items: center;
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    @media(max-width:46.1875em){
        padding: 0.5 1em;
    }
`

export const FinishBoardTitle = styled.div`
    font-weight: 500;
    font-size: 1.5em;
    @media(max-width:46.1875em){
        font-size: 1.2em;
    }  

`

export const FinishInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7em;
    @media(max-width:46.1875em){
        flex-direction: column;
        gap: 2em;
    }    
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;

`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;

`

export const FinishContent = styled.p`
`

export const FinishResult = styled.p`
`

export const Total = styled(Wrapper)`
    font-weight: 600;
`

export const FinishBtn = styled.button`
    outline: none;
    border: none;
    background: #9F9D9F;
    border-radius: 41px;
    padding: 1em 2em;
    font-weight: 600;
`