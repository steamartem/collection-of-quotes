import { Quote } from "../types";
import QuoteItem from "./QuoteItem";

export default function QuoteList({ quotes }: { quotes: Quote[] }) {
  return (
    <div>
      {quotes.map(q => <QuoteItem key={q.id} quote={q} />)}
    </div>
  );
}
