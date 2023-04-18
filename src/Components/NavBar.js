import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <h1>Budget App</h1>
            <Link to={"/transactions/new"}>NEW TRANSACTION</Link>
        </div>
    )
}