import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import QuotesPage from "./pages/QuotesPage";
import SubmitPage from "./pages/SubmitPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes/all" replace />} />
          <Route path="/quotes/:categoryId" element={<QuotesPage />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
