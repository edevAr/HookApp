import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    
    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
      username: '',
      email: '',
      password: ''
    })
    //const {username, email, password} = formState

    
  return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr />
        <input 
            type="text"
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
          />
        <input 
            type="email"
            className='form-control mt-2'
            placeholder='eden.guzman@gmail.com'
            name='email'
            value={email}
            onChange={onInputChange}
          />
        <input 
            type="password"
            className='form-control mt-2'
            placeholder='Contrasenia'
            name='password'
            value={password}
            onChange={onInputChange}
          />
          <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}
