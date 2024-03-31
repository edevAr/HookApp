import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'


export const TodoApp = () => {
    const {todos, todosCount, pendingTodosCount, handleDeleteItem, handleNewTodo, handleToggleTodo} = useTodo();
  return (
    <>
        <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount} </small></h1>
        <hr />
        <div className='row'>
            <div className='col-7'>
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={ id => handleDeleteItem(id)}
                    onToggleTodo = {handleToggleTodo}
                />
            </div>
            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={todo => handleNewTodo(todo)}/>
            </div>
        </div>
        
    </>
  )
}
