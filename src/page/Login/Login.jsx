import React from 'react'
import img from '../../assets/images/photo.png'
/* import user from '../../assets/images/user.png'
import password from '../../assets/images/password.png' */
//rafce
import {LoginContainer,
  Wrapper,
  LoginImg,
  FormWrapper,
  CameraImg,
  FormControl,
  FormLabel,
  FormInput,
  LabelIcon,
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  LoginBtn

} from './Login.styled'
const Login = () => {

  return (
    <LoginContainer>
      <Wrapper>
        <LoginImg>
          <CameraImg src={img} alt = ''/>
        </LoginImg>
        <FormWrapper>
          <FormControl>
            <FormLabel htmlFor='username'>
              <LabelIcon className="far fa-user"/>
            </FormLabel>
            <FormInput placeholder='username' id='username'/>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='password'>
              <LabelIcon className="fas fa-lock"/>
            </FormLabel>
            <FormInput placeholder='password' id='password'/>
          </FormControl>

          <Checkbox>
            <CheckboxInput type='checkbox' />
            <CheckboxLabel>
              Remember me
            </CheckboxLabel>
          </Checkbox>

          <LoginBtn>
            LOGIN
          </LoginBtn>
        </FormWrapper>
      </Wrapper>
    </LoginContainer>

  )
}

export default Login