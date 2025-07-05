import { Link } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1>Quotes App</h1>
        <nav>
          <ul>
            <li><Link to="/quotes/all">Quotes</Link></li>
            <li><Link to="/submit">Submit new quote</Link></li>
          </ul>
        </nav>
      </header>
      <aside>
        <CategoryMenu />
      </aside>
      <main>
        {children}
      </main>
    </>
  );
}
