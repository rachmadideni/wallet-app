import * as React from 'react';
import classNames from 'classnames'

enum InputTypeVariant {
  'text',
  'email',
  'number',
  'date'
}

enum InputVariant {
  'default',
  'primary',
}

type InputProps = {
  type?: keyof typeof InputTypeVariant;
  name: string;
  placeholder?: string;
  label?: string;
  variant?: keyof typeof InputVariant;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  hasError?: boolean;
  errorMessage?: string;
}

const Input = ({ type = 'text', name, variant = 'default', placeholder, label, onChange, startAdornment, endAdornment, hasError, errorMessage }:InputProps ) => {
  
  let labelClass = classNames({
    'pb-2 leading-tighter text-base cursor-text ': true,
    'text-gray-400 ': variant === 'default',
    'text-violet ': variant === 'primary',
    'text-red ': hasError,
  }) 

  let errorMesssageClass = classNames({
    'text-base text-red text-left font-semibold': hasError
  })  

  let inputClass = classNames({
    'appearance-none w-full h-full focus:outline-none px-4 rounded-md': true,
    'border-gray-300 focus:border-gray-300 ': variant === 'default',
    'border-violet focus:border-violet ': variant === 'primary',
    'border-red focus:border-red ': hasError

  })

  let inputWrapperClass = classNames({
    'flex flex-row w-full h-[45px] border-2 rounded-md bg-gray-100 border-2 focus:outline-none focus:ring-1': true,
    'border-gray-300 focus:border-gray-300 ': variant === 'default',
    'border-violet focus:border-violet ': variant === 'primary',
    'border-red focus:border-red ': hasError
  })  

  return (
      <>
      {label && <label htmlFor={type} className={labelClass}>{label}</label>}      
      <div className={inputWrapperClass}>
        {startAdornment && (
          <div className="flex-none w-[2rem]">{startAdornment}</div>
        )}
        
        <input name={name} className={inputClass} type={type} placeholder={placeholder} onChange={onChange} /> 
      
        {endAdornment && (
          <div className="flex w-[8rem] h-full border-gray-200 border-l-2 justify-center items-center">{endAdornment}</div>
        )}        
      </div>      
      {hasError && <span className={errorMesssageClass}>{errorMessage}</span>}      
    </>
  )
}

export default Input;