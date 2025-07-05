import { NavLink } from "react-router-dom";
import { categories } from "../types";

export default function CategoryMenu() {
  return (
    <nav>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            <NavLink to={"/quotes/" + cat.id}>{cat.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
