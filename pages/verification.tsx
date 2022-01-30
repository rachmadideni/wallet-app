import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/button';
import { ArrowRight } from '../components/icon';
import { VerificationFormState } from '../redux/types';

const ReactCodeInput = dynamic(import('react-code-input'));

const Verification: NextPage = () => {

  const initialValues: VerificationFormState = { verification_code: '' };
  const signup = useAppSelector(state => state.app.signup)
  const router = useRouter();
  
  const handleFormSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    router.push('/account');
  }

  return (
    <>
    <Head>
      <title>primelab.io</title>
      <meta name="description" content="primelab.io" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />      
    </Head>

    <Formik 
      initialValues={initialValues}
      validationSchema={
        Yup.object().shape({
          verification_code: Yup.string()
        })} 
      onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
      {props => (
        <form onSubmit={props.handleSubmit}  autoComplete="off">
          <div className="flex flex-col w-full items-center space-y-2">
            <div className="flex flex-col w-full space-x-4 space-y-2 mb-4 justify-center items-center">
              <p className="text-sm text-center">
                We&apos;ve sent a 6-digit verification code to {signup.signup_type_id === 'email' ? 'the email address ' : 'to your phone '} 
              </p>    
              <span className="text-blue-600">
                {signup.signup_type_id === 'email' && signup.email}
                {signup.signup_type_id === 'phone' && signup.phone}
              </span>
            </div>
            <div className="flex">
              Enter verification code
            </div>
            <div className="flex">
              <ReactCodeInput name="verification_code" type='number' fields={6} />
            </div>
            <div className="flex ">
              <Button type="submit" variant="contained" fullWidth endIcon={<ArrowRight className="fill-white"/>}>Continue</Button>
            </div>

            <div className="flex flex-col w-full border-t-2 border-solid border-gray-300 py-6 mt-6 justify-center space-y-6">
              <span className="text-md text-center">Didn&apos;t receive your code?</span>
              <Link href="/">
                <a className="text-md text-center text-blue-600">Send to a different email address</a>
              </Link>
              <Link href="/">
                <a className="text-md text-center text-blue-600">Resend your code </a>
              </Link>
            </div>
          </div>
        </form>

      )}    
    </Formik>
  </>
  )
}

export default Verification;