import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db, ref, query, orderByChild, equalTo, get } from "../firebase/config";
import { Quote } from "../types";
import QuoteList from "../components/QuoteList";

export default function QuotesPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const quotesRef = ref(db, "quotes");
    const q =
        categoryId === "all"
            ? quotesRef
            : query(quotesRef, orderByChild("category"), equalTo(categoryId ?? null));

    get(q).then((snapshot) => {
      const data = snapshot.val() || {};
      const list: Quote[] = Object.entries(data).map(([id, val]: any) => ({
        id,
        author: val.author,
        category: val.category,
        text: val.text,
      }));
      setQuotes(list);
      setLoading(false);
    });
  }, [categoryId]);

  return loading ? (
      <p className="loading-text">
        Loading
        <span className="dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
      </p>
  ) : (
      <QuoteList quotes={quotes} />
  );
}