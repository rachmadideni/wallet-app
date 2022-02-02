import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../hooks'
import { putSignupAction } from '../redux/actions'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button, { ToggleButton } from '../components/button';
import Input from '../components/input';
import { ArrowRight } from '../components/icon';
import TC from '../components/termsCondition';
import { SignupFormState } from '../redux/types'
import { SIGNUP_TYPES } from '../constants';
import tw from 'twin.macro'
import { DisplayFormikState } from '../utils/helper'

const SignUp: NextPage = () => {
  
  const [ isSignUpByEmail, toggleSignupByEmail ] = React.useState(true);
  const [ activeToggleName, setActiveToggleName ] = React.useState('email');
  const [ schema, setSchema] = React.useState({})
  const router = useRouter();

  const initialValues: SignupFormState = { email: '', phone: '', signup_type_id: 'email' };
  const dispatch = useAppDispatch();
  // const userSignupData = useAppSelector(state => state.app.signup)  

  const handleToggle = (e: React.FormEvent<HTMLButtonElement>, toggleName: string ):void => {    
    toggleSignupByEmail(!isSignUpByEmail);
    setActiveToggleName(toggleName)        
  }

  const handleFormSubmit = (values, actions) => {
    // console.log(values);
    actions.resetForm();
    // actions.setSubmitting(false);    
    dispatch(
      putSignupAction(       
        values.email, 
        values.phone, 
        activeToggleName
      ));

    router.push('/verification');
  }
  
  React.useEffect(()=>{
    setSchema(createSignupValidationSchema(isSignUpByEmail))
  }, [isSignUpByEmail])

  const createSignupValidationSchema = ( isSignUpByEmail:boolean ) => Yup.object().shape({
    email: isSignUpByEmail ? Yup.string().email('Invalid email').required('Email is Required') : Yup.string(),
    phone: !isSignUpByEmail ? Yup.string().min(7, 'Too Short!').max(20, 'Too Long!').required('Phone Number is Required') : Yup.string()    
  })
 
  return (
    <>
      <Head>
        <title>primelab.io</title>
        <meta name="description" content="primelab.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />        
      </Head>

      <Formik 
        initialValues={initialValues}
        validationSchema={schema}        
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
      {props => (
        <form onSubmit={props.handleSubmit} autoComplete="off">
          <div tw="flex flex-col w-full items-center space-y-6">
          <div tw="flex flex-row w-full space-x-4 justify-center items-center">
            {SIGNUP_TYPES.map((item, idx) => (
              
              <ToggleButton 
                key={`id-${idx}`} 
                type="button"                
                name="isSignupByEmail"
                active={ item.name === activeToggleName } 
                onClick={
                  (evt) => {
                    handleToggle(evt, item.name)
                    // props.resetForm();                    
                  }
                }>
                  {item.name}
              </ToggleButton>
            ))}          
          </div>
          
          <Input type={ activeToggleName === 'email' ? 'text' : 'number' } name={ activeToggleName } />

          <div tw="flex">
            <Button type="submit" variant="contained" fullWidth endIcon={<ArrowRight tw="fill-current"/>} disabled={!props.isValid || props.isSubmitting}>Continue</Button>
          </div>
          <div tw="flex border-b-2 border-solid border-gray-300 py-6">          
            <TC />
          </div>
          <div tw="space-y-2">
            <span>Already have NEAR account?</span>
            <Button type="button" variant="dark" fullWidth endIcon={<ArrowRight tw="fill-current"/>}>Log in with NEAR</Button>
          </div>
        </div>
        {/* <DisplayFormikState {...props} /> */}
        </form>
      )}
      </Formik>
    </>
  )
}

export default SignUp;