import * as React from 'react';
import ToggleButton from './toggleButton';
import tw from 'twin.macro'

enum ButtonVariant {  
  'contained',
  'dark',
  'text',
  'outline'
}

enum ButtonTypeVariant {
  'submit',
  'button',
  'reset',
}

type ButtonProps = {
  variant?: keyof typeof ButtonVariant;
  type?: keyof typeof ButtonTypeVariant;
  disabled?: boolean;
  startIcon?:React.ReactNode;
  endIcon?:React.ReactNode;
  children: string;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// keeping tsx clean
const styles = {
  button: ({ fullWidth, variant, disabled }: ButtonProps) => [
    tw`text-white text-[16px] capitalize px-[1.25rem] py-[.6rem] rounded-lg flex flex-row items-center`, // base styles
    fullWidth && tw`w-full justify-center`,
    (variant === 'contained' && !disabled) && tw`bg-blue-500 hover:bg-blue-400`,    
    (variant === 'text' && disabled) && tw`bg-white text-gray-500 pointer-events-none`,
    (variant != 'text' && disabled) && tw`bg-gray-400 pointer-events-none`,
    variant === 'dark' && tw`bg-gray-800 hover:bg-gray-700`,
    variant === 'text' && tw`bg-white text-blue-500 hover:text-blue-400`,
    variant === 'outline' && tw`bg-white text-gray-500 hover:text-gray-600 border-2 border-gray-500`    
  ],  
}

const Button = ({ variant = 'contained', type = 'submit', disabled, fullWidth, children, startIcon, endIcon }: ButtonProps) => {  

  return (
    <button type={type} css={styles.button<{}>({ fullWidth, variant, disabled })}>
      {startIcon && <div tw='mr-2'>{startIcon}</div>}
      {children}
      {endIcon && <div tw='ml-2'>{endIcon}</div>}      
    </button> 
  )
}

export default Button;

export {
  Button as Default,
  ToggleButton,  
}