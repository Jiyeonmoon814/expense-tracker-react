import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';


export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    //need to loop through a transactions array 
    //and output each transaction which I'm gonna make a seperate component
    
    return (
        <>
          <h3>History</h3>
          <ul className="list">
              {/* need to know which specific transaction to render so need to pass it in as a prop */}
              {/* bringing it from globalState, mapping through which one we gonna render */}
              {/* Transaction component in passing a prop */}
              {/* Output smth which is called a list and it needs to have a unique key */}
              {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
          </ul>  
        </>
    )
}
