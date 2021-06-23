import React, { useContext,useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { EditTransaction } from './EditTransaction';

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const [showEditTransaction, setShowEditTransaction] = useState(false);
    
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <>
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}
            onClick={() => setShowEditTransaction(!showEditTransaction)}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
       </li>
       {showEditTransaction && <EditTransaction transaction={transaction} /> }
        </>
    )
}
