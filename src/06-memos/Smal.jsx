import {memo} from 'react'

export const Smal = memo(({value}) => {
    console.log('me volvi a dibujar :( ');
  return (
    <small>{value}</small>
  )
})
