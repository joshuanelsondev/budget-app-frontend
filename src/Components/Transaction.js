import { Link } from "react-router-dom";

export default function Transaction({ transaction }) {
  const formatDate = (date) => {
    const options = {
      month: "long",
      day: "numeric",
      timeZone: "UTC", // Set the timezone of your date value
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="grid grid-cols-[100px_1fr_auto] gap-2 pb-4">
      <p className="text-dark justify-self-start border-b border-gray pb-4 w-full">
        {formatDate(transaction.date)}
      </p>
      <span className="text-link font-semibold justify-self-start border-b border-gray pb-4 w-full">
        <Link
          to={`/transactions/${transaction.id}`}
          className="hover:underline underline-offset-2"
        >
          {transaction.item_name}
        </Link>
      </span>
      <div className="border-b border-gray w-16 flex justify-end">
        <p className="text-dark pb-4">{`$${transaction.amount}`}</p>
      </div>
    </div>
  );
}