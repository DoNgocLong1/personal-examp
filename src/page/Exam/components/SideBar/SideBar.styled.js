import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 2em 1em;
    background-color: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    @media(max-width:63.9375em){
    }
    @media(max-width:46.1875em){
        margin: auto;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        max-height: 80vh;
        min-height: 80vh;
        z-index: 100;
        display:${props => 
            props.isShow ? 'flex': 'none'
        };
    }
`

export const QuestionContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    row-gap: 1em;
    column-gap: 0.5em;
`
export const QuestionNumber = styled.button`
    font-size: 0.8em;
    width: 100%;
    height: 100%;
    padding: 0.8em 0.3em;
    outline: none;
    border: 1px solid rgba(0,0,0,0.5);
    background-color: ${props => 
        props.isCheck ? '#B6B6B6' : 'transparent'
    };
`

export const CurrentQuestionNumber = styled(QuestionNumber)`
    background: #92FD9D;
`

export const QuestionAnswered = styled(QuestionNumber)`
    background: #B6B6B6;
`

export const Button = styled.button`
    font-size: 1em; 
    background: #9F9D9F;
    border-radius: 41px;
    width: 70%;
    padding: 0.5em 0.8em;
    border: none;
    outline: none;
`