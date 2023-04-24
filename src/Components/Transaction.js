import { Link } from "react-router-dom";

export default function Transaction({ transaction }) {
  const formatDate = (date) => {
    const unformattedDate = new Date(date);
    const month = unformattedDate.toLocaleString("default", { month: "long" });
    const day = unformattedDate.getDate();
    const formattedDate = `${month} ${day}`;
    return formattedDate;
  };

  return (
    <div className="grid grid-cols-[100px_1fr_auto] gap-2 pb-4">
      <p className="text-dark justify-self-start border-b border-gray pb-4 w-full">
        {formatDate(transaction.date)}
      </p>
      <Link
        to={`/transactions/${transaction.id}`}
        className="text-link font-semibold justify-self-start border-b border-gray pb-4 w-full"
      >
        <span className="hover:underline underline-offset-2">
          {transaction.item_name}
        </span>
      </Link>
      <div className="border-b border-gray w-16 flex justify-end">
        <p className="text-dark pb-4">{`$${transaction.amount}`}</p>
      </div>
    </div>
  );
}