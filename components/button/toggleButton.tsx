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
    'toggle-button active': active,
    'toggle-button': !active
  })

  return (
    <button type={type} name={name} className={toggleButtonClass} onClick={onClick}>
      {children}    
    </button>
  )
}

export default ToggleButton;