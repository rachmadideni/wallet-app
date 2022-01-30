import * as React from 'react';
import classNames from 'classnames'
import ToggleButton from './toggleButton';

enum ButtonVariant {  
  'contained',
  'dark',
  'text',
  'outline'
}

type ButtonProps = {
  variant?: keyof typeof ButtonVariant;
  type: string;
  disabled?: boolean;
  startIcon?:React.ReactNode;
  endIcon?:React.ReactNode;
  children: string;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ variant = 'contained', type = 'submit', disabled, children, startIcon, endIcon, fullWidth, onClick }:ButtonProps) => {
  let buttonClass = classNames({
    'text-white text-[16px] capitalize px-[1.25rem] py-[.6rem] rounded-lg flex flex-row items-center': true,
    'w-full justify-center ': fullWidth,
    'bg-blue-500 hover:bg-blue-400 ' : variant === 'contained' && !disabled, 
    'bg-gray-800 hover:bg-gray-700 ': variant === 'dark',
    'bg-white text-blue-500 hover:text-blue-400': variant === 'text',
    'bg-gray-400 pointer-events-none ': variant != 'text' && disabled,
    'bg-white text-gray-500 hover:text-gray-600 border-2 border-gray-500': variant === 'outline'
  })
  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {startIcon && <div className="mr-2">{startIcon}</div>}
      <div>{children}</div>
      {endIcon && <div className="ml-2">{endIcon}</div>}      
    </button>
  )
}

export default Button;

export {
  Button as Default,
  ToggleButton
}