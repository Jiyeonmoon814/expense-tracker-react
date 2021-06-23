import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//Initial State
const initialState = {
    transactions : [
        {id:1, text:'Flower', amount:-30},
        {id:2, text:'Salary', amount:3000},
        {id:3, text:'Bonus', amount:200},
        {id:4, text:'Insurance', amount:-300}
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component 
export const GlobalProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function editTransaction(id,transaction){
        dispatch({
            type:'EDIT_TRANSACTION',
            id:id,
            payload:transaction
        })
    }

    return (
        <GlobalContext.Provider value = {{
            transactions:state.transactions,
            addTransaction,
            deleteTransaction,
            editTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}