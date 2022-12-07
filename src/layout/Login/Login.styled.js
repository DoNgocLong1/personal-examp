import styled from "styled-components";
import bg1 from '../../assets/images/bg1.jpg';
export const LoginContainer = styled.div`
    background-color: #16070c ;
    background-image: url(${bg1});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    font-size: 20px;
    @media(max-width:63.9375em){
        justify-content: center;
        align-items: center;
    }
    @media(max-width:46.1875em){
        background-repeat: repeat-y;
        background-position: top;
        justify-content: center;
        align-items: center;
    }
    @media(min-width:46.25em) and (max-width:63.9375em){
        justify-content: center;
        align-items: center;
    }
`

export const Wrapper = styled.form`
    width: 18em;
    height: 22.5em;
    margin-right: 17em;
    margin-top: 6em;
    background-color: #85868A;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    border: 0.15em solid #FBBC1A;
    border-radius: 0.2em;
    @media(max-width:46.1875em){
        margin: 0;
        width: 15em;
    }
`

export const LoginImg = styled.div`
    width: 5em;
    height: 5em;
    background-color: #85868A;
    border-radius: 50%;
    border: 0.15em solid #FBBC1A;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
`
export const FormWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1em;
`

export const CameraImg = styled.img`
    width: 4em;
    height: 4em;
`

export const FormControl = styled.div`
    display: flex;
    border-radius: 0.2em;
    background: #F3F1F1;
    overflow: hidden;
`

export const FormLabel = styled.label`
    padding: 0.5em 1em; 
    background: #F3F1F1;
`

export const FormInput = styled.input`
    border: none;
    background: transparent;
    width: 10em;
    outline: none;
    font-size: 0.7em;
`

export const LabelIcon = styled.i`
    font-size: 1.5em;
    background: #F3F1F1;
`

export const Checkbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    gap: 0.5em
`

export const CheckboxInput = styled.input`
    width: 1.3em;
    height: 1.3em;
`

export const CheckboxLabel = styled.label``


export const LoginBtn = styled.button`
    width: 100%;
    padding: 1em;
`




