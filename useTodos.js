import { useEffect, useReducer } from 'react';
import { todoReduce } from '../08-useReducer/todoReduce';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];//esto hace que se guarde la info en el almacen interno, pero sin lo de abajo cuandos e actualiza dse pierde
}

export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer( todoReduce, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );//este stringify hace que se guarde a pesar de que actualizemos la pagina
    }, [todos])
    

    const handleNewTodo = ( todo ) => {//agrega todo
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {//elimina todo
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {//tacha todo hecho
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}