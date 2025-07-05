import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db, ref, push, update, get } from "../firebase/config";
import { categories } from "../types";

export default function SubmitPage() {
  const [params] = useSearchParams();
  const editId = params.get("edit");
  const navigate = useNavigate();
  const [form, setForm] = useState({ author: "", text: "", category: "star-wars" });

  useEffect(() => {
    if (editId) {
      get(ref(db, `quotes/${editId}`)).then(snap => {
        const data = snap.val();
        if (data) setForm({ author: data.author, text: data.text, category: data.category });
      });
    }
  }, [editId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await update(ref(db, `quotes/${editId}`), form);
    } else {
      await push(ref(db, "quotes"), form);
    }
    navigate("/quotes/all");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="text" placeholder="Quote text" value={form.text} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
      <select name="category" value={form.category} onChange={handleChange}>
        {categories.filter(c => c.id !== "all").map(c => (
          <option key={c.id} value={c.id}>{c.title}</option>
        ))}
      </select>
      <button type="submit">{editId ? "Save changes" : "Add quote"}</button>
    </form>
  );
}
