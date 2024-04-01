
import React from 'react'
import { UserContext } from './UserContext'

const user = {
    id: 123,
    name :'Eden Guzman',
    email : 'eden.guzman@gmail.com'
}
export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo', user: user}}>
        {children}
    </UserContext.Provider>
  )
}
