import * as React from 'react';
import tw from 'twin.macro'

type toggleButtonProps = {
  active: boolean;
  type: string;
  name: string;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const ToggleButton = ({ active, type, name, onClick, children }: toggleButtonProps) => {
  return (
    <button 
      css={[
        tw`rounded-xl px-[1.1rem] py-[.4rem] mx-2 bg-white capitalize text-gray-400 border-0`,
        active && tw`bg-gray-100 text-black border-2 border-gray-400`
      ]}
      type={type} name={name} onClick={onClick}>
      {children}    
    </button>
  )
}

export default ToggleButton;