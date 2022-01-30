import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import useSWR from 'swr';
import Input from '../components/input';
import Button from '../components/button';
import { ArrowRight } from '../components/icon';
import { AccountFormState } from '../redux/types'

const Account: NextPage = () => {
  
  const initialValues: AccountFormState = { fullName: '', accountId: '' };
  
  const handleFormSubmit = (values, actions) => {
    actions.resetForm();    
    // dispatch(
    //   putSignupAction(       
    //     values.email, 
    //     values.phone, 
    //     activeToggleName
    //   ));

    // router.push('/verification');
  }

  const validateUniqueAccountId = (accountId) => {
    let error;
    if(!value){
      error = 'Required'
    } else if (value === 'johndoe'){
      error = 'Account ID already taken!'
    }

    return error;
  }

  const validateForm = (e) => {
    console.log(e);
  }; 
  
  const address = `http://localhost:3000/api/verification`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);  
  
  return (
    <>
      <Head>
        <title>primelab.io</title>
        <meta name="description" content="primelab.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />        
      </Head>

      <Formik 
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().required('Fullname is required'),
          accountId: Yup.string().required('Account ID is required')
        })} onSubmit={(values, actions) => { 
          console.log(values)
          // handleFormSubmit(values, actions) }
        }}>
        {props => (
          <form onSubmit={props.handleSubmit} className="space-y-6" autoComplete="off">
            <div className="">
              <p>Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
            </div>
            <div className="flex flex-col">
              <Input 
                type="text"
                label="Full Name"
                name="fullName"                                   
                onChange={props.handleChange}            
                hasError={ typeof props.errors.fullName !== 'undefined'}
                errorMessage={ props.errors.fullName }
                />
            </div>
            <div className="flex flex-col">
              <Input 
                type="text"
                label="Account Id"
                name="accountId"                                   
                onChange={props.handleChange}            
                endAdornment={<h4 className="text-black text-md font-semibold">.near</h4>}
                hasError={ typeof props.errors.accountId !== 'undefined' }
                errorMessage={ props.errors.accountId }                
                />
            </div>
            <div className="flex justify-center">
              <Button type="submit" variant="contained" endIcon={<ArrowRight className="fill-white"/>}>continue</Button>
            </div>
            <div className="flex border-b-2 p-6">
              <p className="text-center">By creating a NEAR account, you agree to the NEAR Wallet <Link href="/"><a className="text-blue-600">Terms of Service</a></Link> and <Link href="/"><a className="text-blue-600">Privacy Policy.</a></Link></p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span>Already have NEAR account?</span>
              <Button type="button" variant="dark" endIcon={<ArrowRight className="fill-white"/>}>Log in with NEAR</Button>
            </div>            
          </form>

        )}
      </Formik>
    </>
  )
}

export default Account;