import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en <LoginPage/>>', () => { 
    const user = {
        id: 1, 
        name: 'Fernando'
    }

    test('debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        //screen.debug()
        const preTage = screen.getByLabelText('pre')
        expect(preTage.innerHTML).toBe('null')
     })

     test('debe de llamar al setUser cuando se hace click en el boton', () => { 
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        
        const button = screen.getByRole('button')
        fireEvent.click(button)
        //screen.debug()
        //const preTage = screen.getByLabelText('pre')
        //expect(preTage.innerHTML).toContain(user.name)
        //expect(preTage.innerHTML).toContain(`${user.id}`)
        expect(setUserMock).toHaveBeenCalledWith({"email": "eden.guzman@gmail.com", "id": 123, "name": "Eden Guzman"})
      })
 })