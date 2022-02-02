import * as React from 'react';
import { useField, FieldAttributes } from 'formik'
import tw, { styled } from 'twin.macro'

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
}

const Input: React.FC<FieldAttributes<InputProps>> = ({ variant = 'default', ...props }) => {  
  
  const [ field, meta ] = useField(props); 

  const StyledLabel = styled.label([
    tw`pb-2 leading-tight text-base cursor-text`,
    variant === 'default' && tw`text-gray-400`,
    variant === 'primary' && tw`text-violet`,
    (meta.touched && meta.error) && tw`text-red`
  ]);  
  
  const StyledErrorMessage = styled.span([
    tw`text-base text-red text-left font-semibold`
  ])

  const { type, label, startAdornment, endAdornment } = props;

  return (
      <>
      {label && <StyledLabel htmlFor={type}>{label}</StyledLabel>}      
      <div css={[
        tw`flex flex-row w-full h-[45px] border-2 rounded-md bg-gray-100 border-2 mx-[2rem] focus:outline-none `,
        variant === 'default' && tw`border-gray-300 focus:(border-violet)`,
        variant === 'primary' && tw`border-violet focus:(border-violet)`,
        (meta.touched && meta.error) && tw`border-red`
      ]}>
        {startAdornment && (
          <div tw="flex-none w-[2rem]">{startAdornment}</div>
        )}
        
        <input css={[
            tw`appearance-none w-full h-full px-4 rounded-md focus:outline-none `,
            variant === 'default' && tw`border-gray-300 focus:(border-violet)`,
            variant === 'primary' && tw`border-violet focus:(border-violet)`,
        ]} {...field} {...props}/> 
      
        {endAdornment && (
          <div tw="flex w-[8rem] h-full border-gray-200 border-l-2 justify-center items-center">{endAdornment}</div>
        )}        
      </div>
      {meta.touched && meta.error ? (
         <div tw="flex items-start justify-start">
           <StyledErrorMessage>{meta.error}</StyledErrorMessage>
         </div>
       ) : null}      
    </>
  )
}

// const TextInput:React.FC<FieldAttributes<InputProps>> = ({ ...props}) => <Input {...props} /> 
export default Input;