import * as React from 'react';

const Layout = ({ children }:{children: React.ReactNode }) => {
  return (
    <div className="flex flex-row justify-center safe-top safe-left safe-right safe-bottom max-h-screen h-full">      
      {children}      
    </div>
  )
}

export default Layout;