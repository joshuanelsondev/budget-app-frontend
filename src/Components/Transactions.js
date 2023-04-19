import { useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";

export default function Transactions({ transactions, setTransactions }) {
    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
            setTransactions(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [setTransactions]);   
    
    return (
        <div className="flex flex-col items-between mx-16">
            {transactions.map(transaction => {
                return <Transaction key={transaction.id} transaction={transaction} />
            })}
        </div>
    )
}