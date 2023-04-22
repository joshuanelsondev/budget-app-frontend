import { useState } from "react";
import Transactions from "../Components/Transactions";

export default function Index() {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

 
  return (

    <div className="flex flex-col mt-8 gap-8 w-8/12 min-w-[700px]">
      <h2 className="text-5xl text-center text-dark pt-4 pl-12 w-full">Bank Account Total: ${total}</h2>
      <Transactions transactions={transactions} setTransactions={setTransactions} setTotal={setTotal}/>
    </div>

  );
}
