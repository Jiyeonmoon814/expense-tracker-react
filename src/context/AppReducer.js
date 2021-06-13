export default (state, action) => {
    switch(action.type){
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                //filtering out anything that has id 
                transactions:state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}

//how we specify the application state changes 
//in response to certain actions to our store, context