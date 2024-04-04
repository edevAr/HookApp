import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')
describe('Pruebas en <MultipleCustomHooks>', () => { 
    test('debe de mostrar el componente por defecto', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Cargando'))
        expect(screen.getByText('Informacion de pokemon'))

        const nextButton = screen.getByRole('button', {name: 'Anterior'})
        expect(nextButton.disabled).toBeFalsy()
        //screen.debug()
     })

    test('debe de mostrar un pokemon', () => { 
        /*useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'charmander',
                sprites: ['uri1', 'uri2']
            },
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks key={1}/>)
        screen.debug()*/
     })
 })