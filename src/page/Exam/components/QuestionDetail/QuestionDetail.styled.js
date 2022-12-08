import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
    height: 100%;
`

export const DoQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: flex-start;
`

export const QuestionTitle = styled.p`
    font-size: 1em;
    font-weight: 500;
    text-align: left;

`

export const AnswerList = styled.div`
    display: flex;
    padding: 0 1em;
    flex-direction: column;
    gap: 0.8em;
    align-items: flex-start;
`

export const AnswerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
    @media(max-width:46.1875em){
        align-items: flex-start;
    }
`


export const AnswerCheckbox = styled.input`
    width: 1.5em;
    height: 1.5em;
`

export const AnswerContent = styled.label`
    font-size: 0.9em;
    line-height: 100%;
`

export const QuestionBtn = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2em;
`


export const PcQuestionBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Button = styled.button`
    padding: 0.5em 0.8em;
    font-size: 0.9em; 
    background: #EEE7A9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
`

export const MobileButton = styled(Button)`
    display: none;
    font-size: 1em; 
    background: #9F9D9F;
    border-radius: 41px;
    width: 70%;
    border: none;
    @media(max-width:46.1875em){
        display: block;
    }

`