import styled from "styled-components";

export const ExamContainer = styled.div`
    font-size: 20px;
    background: #C4C4C4;
    display: flex;
    flex-direction: row;
    width: 80%;
    min-height: 100vh;
    position: relative;
    @media(max-width:63.9375em){ 
        width: 100%;
    }
    @media(max-width:46.1875em){
        
    }
`

export const Layout = styled.div`
    display: none;
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: black;
    opacity: 0.8;
    z-index: 99;
    @media(max-width:63.9375em){ 
        display: ${props => 
            props.isShow ? 'block' : 'none'
        };
        width: 100%;
    }
`