import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 0.5em;
    padding: 0.7em;
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.5);
`

export const Tittle = styled.p`
    font-size: 1em;
    font-weight: 500;
    
`

export const CountDown = styled.p`
    font-size: 0.9em;
`

export const CountDownNumber = styled.span`
    font-size: 0.9em;
`

export const CountSticky = styled.span`
    min-width: 100%;
    background: #C4C4C4;
    height: 1em;
    position: relative;
`

export const CountDownSticky = styled.span`
    width: ${(props) => (props.width ? `${props.width}%` : "100%")};
    background: #41C54E;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
`