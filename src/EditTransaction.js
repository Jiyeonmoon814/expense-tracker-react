import React, { useContext,useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const EditTransaction = ({transaction}) => {
    const [text,setText] = useState(transaction.text)
    const [amount,setAmount] = useState(transaction.amount) 
    const [showEditTransaction, setShowEditTransaction] = useState(true);
    
    const { editTransaction } = useContext(GlobalContext);
    

    const onSubmit = e => {
        e.preventDefault();
        const id = transaction.id
        const updateTransaction = {
            text,
            amount: +amount
        }

        editTransaction(id,updateTransaction)
        setText(text)
        setAmount(amount)
        setShowEditTransaction(!showEditTransaction)

    }
    return (
        <>
        {showEditTransaction&&<form onSubmit={onSubmit} >
            <input type="text" value={text} 
                   onChange={(e) => setText(e.target.value)} placeholder={text} />
            <input type="number" value={amount}
                   onChange={(e) => setAmount(e.target.value)} placeholder={amount} />
            <button className="btn">Edit Transaction</button>
        </form>}
        </>
    )
}
