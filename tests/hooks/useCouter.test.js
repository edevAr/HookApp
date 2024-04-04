import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('pruebas en el useCounter', () => { 
    
    test('de de retornar los valores por defecto', () => { 
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;
        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
     })

     test('debe de generar el counter con el valor de 100', () => { 
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement, increment, reset} = result.current;
        expect(counter).toBe(100)
     })

     test('deberia de incrementar el contador', () => { 
        const {result} = renderHook(() => useCounter());
        const {counter, increment} = result.current;

        act(() => {
            increment();
        })
        
        expect(result.current.counter).toBe(11)
     })

     test('deberia de decrementar el contador', () => { 
        const {result} = renderHook(() => useCounter());
        const {counter, decrement} = result.current;

        act(() => {
            decrement();
        })
        
        expect(result.current.counter).toBe(9)
     })

     test('deberia de resetear el contador', () => { 
        const {result} = renderHook(() => useCounter());
        const {counter, decrement ,reset} = result.current;

        act(() => {
            decrement();
            reset();
        })
        
        expect(result.current.counter).toBe(10)
     })
 })