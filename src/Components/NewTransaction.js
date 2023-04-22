import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {  v4 as generateId } from "uuid";
import axios from "axios";

export default function NewTransaction() {
  const [transaction, setTransaction] = useState({
    id: generateId(),
    date: "",
    item_name: "",
    amount: "",
    from: "",
    category: ""
  })

  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/transactions`, transaction)
      .then(() => {
        navigate("/transactions");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };


  return (
    <div className="flex flex-col items-center mt-8 gap-8">
      <h2 className="text-6xl">Add a new item</h2>
      <form
        className="flex flex-col rounded-lg p-8 gap-8 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="date">
            Date
          </label>
          <input
            className="border rounded"
            onChange={handleTextChange}
            id="date"
            type="date"
            value={transaction.date}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="name">
            Item Name
          </label>
          <input
            className="border rounded"
            onChange={handleTextChange}
            id="item_name"
            type="text"
            value={transaction.item_name}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="amount">
            Amount
          </label>
          <input
            className="border rounded"
            onChange={handleTextChange}
            id="amount"
            type="number"
            value={transaction.amount}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="from">
            From
          </label>
          <input
            className="border rounded"
            onChange={handleTextChange}
            type="text"
            id="from"
            value={transaction.from}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="category">
            Category
          </label>
          <input
            className="border rounded"
            onChange={handleTextChange}
            type="text"
            id="category"
            value={transaction.category}
            required
          />
        </div>
        <div className="flex justify-between ">
          <Link
            to={"/transactions"}
            className="border rounded-lg text-sm font-bold w-auto p-2 self-center cursor-pointer hover:bg-primary"
          >
            BACK
          </Link>
          <input
            className="border rounded-lg text-sm font-bold w-48 p-2 self-center cursor-pointer hover:bg-primary"
            type="submit"
            value="CREATE NEW ITEM"
          />
        </div>
      </form>
    </div>
  );
}
