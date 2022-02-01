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
    actions.resetForm();    
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
    phone: !isSignUpByEmail ? Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Phone Number is Required') : Yup.string()    
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
          <div className="flex flex-col w-full items-center space-y-6">
          <div className="flex flex-row w-full space-x-4 justify-center items-center">
            {SIGNUP_TYPES.map((item, idx) => (
              
              <ToggleButton 
                key={`id-${idx}`} 
                type="button"                
                name="isSignupByEmail"
                active={ item.name === activeToggleName } 
                onClick={
                  (evt) => {
                    handleToggle(evt, item.name)
                    props.resetForm();                    
                  }
                }>
                  {item.name}
              </ToggleButton>
            ))}          
          </div>
          
          <Input 
            type={ activeToggleName === 'email' ? 'text' : 'number' }
            name={ activeToggleName }                                   
            onChange={props.handleChange}            
            hasError={ (typeof props.errors.email !== 'undefined' || typeof props.errors.phone !== 'undefined') }
            errorMessage={(props.errors.email || props.errors.phone)}
            />

          <div className="flex">
            <Button type="submit" variant="contained" fullWidth endIcon={<ArrowRight className="fill-white"/>} disabled={!props.isValid || props.isSubmitting}>Continue</Button>            
          </div>
          <div className="flex border-b-2 border-solid border-gray-300 py-6">          
            <TC />
          </div>
          <div className="space-y-2">
            <span>Already have NEAR account?</span>
            <Button type="button" variant="dark" fullWidth endIcon={<ArrowRight className="fill-white"/>}>Log in with NEAR</Button>
          </div>
        </div>
        </form>
      )}
      </Formik>
    </>
  )
}

export default SignUp;