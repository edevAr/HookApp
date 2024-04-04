import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"


describe('Pruebas en <HomePage/>', () => { 
    const user = {
        id: 1, 
        name: 'Fernando'
    }

    test('debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        )
        screen.debug()
        const preTage = screen.getByLabelText('pre')
        expect(preTage.innerHTML).toBe('null')
     })

     test('debe de mostrar el componente con el usuario', () => { 
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        )
        screen.debug()
        const preTage = screen.getByLabelText('pre')
        expect(preTage.innerHTML).toContain(user.name)
        expect(preTage.innerHTML).toContain(`${user.id}`)
     })

     
 })