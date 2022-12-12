import React, {useState, useEffect, useRef} from 'react'
import img from '../../assets/images/photo.png'
import { Link } from 'react-router-dom'
/* import user from '../../assets/images/user.png'
import password from '../../assets/images/password.png' */
//rafce
import {LoginContainer,
  Wrapper,
  LoginImg,
  FormWrapper,
  CameraImg,
  FormControlWrapper,
  FormControl,
  FormLabel,
  FormInput,
  ErrorMessage,
  LabelIcon,
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  LoginBtn

} from './Login.styled'
const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const userRef = useRef()
  const passwordrRef = useRef()
  useEffect(() => {
    
    console.log(userRef.current.innerText)

  },[user,password])

  const validate = (value, selector, message = 'element is empty') => {
    console.log(value === '');
    if(value === '') {
      console.log(selector);
      selector.innerText = message
    }
    return 
  }
  return (
    <LoginContainer>
      <Wrapper>
        <LoginImg>
          <CameraImg src={img} alt = ''/>
        </LoginImg>
        <FormWrapper>
          <FormControlWrapper>
            <FormControl>
              <FormLabel htmlFor='username'>
                <LabelIcon className="far fa-user"/>
              </FormLabel>
              <FormInput 
              placeholder='username' 
              id='username'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onBlur={(e) => validate(e.target.value, userRef.current,'username is empty' )}
              />
            </FormControl>
            <ErrorMessage ref={userRef}></ErrorMessage>
          </FormControlWrapper>

          <FormControlWrapper>
            <FormControl>
              <FormLabel htmlFor='password'>
                <LabelIcon className="fas fa-lock"/>
              </FormLabel>
              <FormInput 
              placeholder='password' 
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => validate(e.target.value, passwordrRef.current,'password is empty' )}
              />
            </FormControl>
            <ErrorMessage ref={passwordrRef}></ErrorMessage>
          </FormControlWrapper>
          <Checkbox>
            <CheckboxInput type='checkbox' />
            <CheckboxLabel>
              Remember me
            </CheckboxLabel>
          </Checkbox>
        <Link to='/dashboard'>
          <LoginBtn>
            LOGIN
          </LoginBtn>
        </Link>
        </FormWrapper>
      </Wrapper>
    </LoginContainer>

  )
}

export default Login