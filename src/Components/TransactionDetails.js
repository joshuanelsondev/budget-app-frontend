import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TransactionDetails() {
    const [transaction, setTransaction] = useState({});
    const navigate = useNavigate();
    let { id } = useParams();
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
            .then((res) => {

                setTransaction(res.data);
            }).catch(() => {
                navigate("/not-found");
            })
    }, [id, navigate]);

    const handleDelete = () => {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
          .then(() => {
            navigate("/transactions");
        });
    };

    return (
      <div className="flex flex-col rounded-lg w-8/12 mt-8 ">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-4xl">{transaction.item_name}</h1>
          <h2 className="border-b pb-4">
            <span className="font-bold">Amount: </span> 
            {`$${transaction.amount}`}
          </h2>
          <h2 className="border-b pb-4"><span className="font-bold">Date: </span>{transaction.date}</h2>
          <h2 className="border-b pb-4"><span className="font-bold">From: </span>{transaction.from}</h2>
          <h2 className="border-b pb-4"><span className="font-bold">Category: </span>{transaction.category}</h2>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <Link
            className="border rounded-lg text-sm py-2 px-4 hover:bg-primary "
            to={"/transactions"}
          >
            BACK
          </Link>
          <Link
            className="border rounded-lg text-sm py-2 px-4 hover:bg-primary "
            to={"/transactions/:id/edit"}
          >
            EDIT
          </Link>
          <button
            className="border rounded-lg text-sm py-2 px-4 hover:bg-primary "
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
      </div>
    );
}
