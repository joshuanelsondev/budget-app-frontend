import { useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";

export default function Transactions({ transactions, setTransactions, setTotal }) {

    const calculateTotal = (transactions) => {
        return transactions.reduce((total, transaction) => {
            return total + Number(transaction.amount);
        }, 0);
    }; 

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`)
            .then((res) => {
                console.log(res.data, "test")
                setTransactions(res.data);
                setTotal(calculateTotal(res.data))
            }).catch((error) => {
                console.log(error);
            });
    }, [setTransactions, setTotal]);   
    
    return (
        <div className="flex flex-col items-between mx-16">
            {console.log(transactions)}
            {transactions && transactions.map(transaction => {
                return <Transaction key={transaction.id} transaction={transaction} />
            })}
        </div>
    )
}