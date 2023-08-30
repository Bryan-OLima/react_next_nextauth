'use client';
import {SessionProvider} from 'next-auth/react';

const Provider = ({children}) => {

  console.log(children)
  return (
    <SessionProvider> {children} </SessionProvider>
  )
}

export default Provider