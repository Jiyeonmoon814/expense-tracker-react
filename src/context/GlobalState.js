import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
//Initial State
const initialState = {
    transactions: [
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Salary', amount:+3000},
        {id:3, text:'Bonus', amount:+300},
        {id:4, text:'Flight ticket', amount:-550}
    ]
}

//Create a Context object
//When React renders a component that subscribes to this Context object
//it will read the current context value from the closest matching Provider above it in the tree 
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    //An alternative to useState.
    //Accepts a reducer of type (state, action) => newState 
    //and returns the current state paired with a dispatch method. 
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions 
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    //Context.Provider value = {/*some value*/}
    //Every Context object comes with a Provider React Component
    //that allows consuming components to subscribe to context changes 
    
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
