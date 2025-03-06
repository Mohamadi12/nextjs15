import React from 'react'
import Revenue from './revenue/page'
import Customers from './customers/page'

const Layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
        <Revenue />
        {children} 
        <Customers />
    </div>
  )
}

export default Layout