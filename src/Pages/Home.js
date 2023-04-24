import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col text-center justify-center pt-10">
      <h1 className="text-4xl">Welcome to BDGTR</h1>
      <p>An app to keep track of your finances</p>
      <Link to={"/transactions"} className="border border-gray rounded mt-10 text-sm w-fit self-center font-bold bg-primary p-2">VIEW TRANSACTIONS</Link>
    </div>
  );
}
