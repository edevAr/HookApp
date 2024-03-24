import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'eden.guzman@google.com'
    })
    const {username, email} = formState;
    const onInputChange= ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('useEffect called!');
    }, []);

    useEffect(() => {
        console.log('formState called!');
    }, [formState]);

    useEffect(() => {
        console.log('email called!');
    }, [email]);
  return (
    <>
        <h1>Formulario Simple</h1>
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
    </>
  )
}
