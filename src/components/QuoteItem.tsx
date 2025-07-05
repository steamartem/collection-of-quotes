import { Quote } from "../types";
import { db, remove, ref as dbRef } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function QuoteItem({ quote }: { quote: Quote }) {
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/submit?edit=${quote.id}`);
  };
  const onDelete = () => {
    if (confirm("Delete this quote?")) {
      remove(dbRef(db, `quotes/${quote.id}`));
    }
  };

  return (
    <div className="quote-card">
      <p>"{quote.text}"</p>
      <p>— {quote.author}</p>
      <button onClick={onEdit}>✎</button>
      <button onClick={onDelete}>✕</button>
    </div>
  );
}
