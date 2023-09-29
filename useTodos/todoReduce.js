// { type: [todo remove], payload: id }

export const todoReduce = ( initialState = [], action ) => {


    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );//el filter envia un nuevgoa rreglo a diferencia del push, entonces se puede usar para actualizar y poner de 0 este argumento

        case '[TODO] Toggle Todo'://cambia en la lista de completadoa  no completado
            return initialState.map( todo => { //regresa un arreglo, lo transforma y lo haeotra cosa

                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done//armo la funcion para que cambie el done, poregunta si el id es el mismo que el de la accion, se ejecuta, y cuando se toca el boton que en el hijo esta explicado, cambia el done de true a false
                    }
                } 

                return todo;
            });
    
        default:
            return initialState;
    }


}