import { Link } from "react-router-dom";

export default function NavBar() { 
    return (
        <div className="bg-gradient-to-r from-primary to-secondary h-28 w-full flex justify-between items-center px-10 text-dark">
            <Link to={"/transactions"} className="text-4xl">BDGTR</Link>
            <Link to={"/transactions/new"} className="border border-gray rounded text-xs font-bold py-2 px-6">NEW TRANSACTION</Link>
        </div>
    )
}