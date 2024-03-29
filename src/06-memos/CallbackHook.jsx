import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather  = useCallback(
      (value) => {
        setCounter((c) => c +value)
      },
      [],
    )
    

    /*const incrementFather = () => {
        setCounter(counter+1)
    }*/
  return (
    <>
        <div>useCallback Hook: {counter}</div>
        <hr />
        <ShowIncrement increment={ incrementFather }/>
    </>
  )
}
