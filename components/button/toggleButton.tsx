import * as React from 'react';
import classNames from 'classnames';

type toggleButtonProps = {
  active: boolean;
  type: string;
  name: string;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const ToggleButton = ({ active, type, name, onClick, children }: toggleButtonProps) => {  
  let toggleButtonClass = classNames({
    'rounded-xl px-[1.1rem] py-[.4rem] bg-gray-100 capitalize text-black border-2 border-gray-400': active,
    'rounded-xl px-[1.1rem] py-[.4rem] bg-white capitalize text-gray-500 hover:text-gray-500 border-0 ': !active
  })

  return (
    <button type={type} name={name} className={toggleButtonClass} onClick={onClick}>
      {children}    
    </button>
  )
}

export default ToggleButton;