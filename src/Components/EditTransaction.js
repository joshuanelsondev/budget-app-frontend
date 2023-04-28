import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { v4 as generateId } from "uuid";
import axios from "axios";

export default function EditTransaction() {
  const [transactionEdit, setTransactionEdit] = useState({
    id: generateId(),
    date: "",
    item_name: "",
    amount: "",
    from: "",
    category: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
      .then((res) => {
        setTransactionEdit(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .put(`${process.env.REACT_APP_API_URL}/transactions/${id}`, transactionEdit)
      .then(() => {
        navigate(`/transactions`)
      })
  };

  const handleTextChange = (event) => {
    setTransactionEdit({ ...transactionEdit, [event.target.id]: event.target.value});
  };

  return (
    <div>
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
              value={transactionEdit.date}
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
              value={transactionEdit.item_name}
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
              value={transactionEdit.amount}
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
              value={transactionEdit.from}
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
              value={transactionEdit.category}
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
              className="border rounded-lg text-sm font-bold w-fit p-2 self-center cursor-pointer hover:bg-primary"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </form>
      </div>
    </div>
  );
}