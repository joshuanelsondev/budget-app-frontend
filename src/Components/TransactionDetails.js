import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TransactionDetails() {
    const [transaction, setTransaction] = useState({});
    const navigate = useNavigate();
    let { id } = useParams;

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
        <div>
            <div>
                <h1>{transaction.item_name}</h1>
                <li>{transaction.amount}</li>
                <li>{transaction.date}</li>
                <li>{transaction.from}</li>
                <li>{transaction.category}</li>
            </div>
            <Link to={"/transactions"}>BACK</Link>
            <Link to={"/transactions/edit"}>EDIT</Link>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}
