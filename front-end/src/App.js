import Products from "./components/Products";
import ProductReviewForm from "./components/ReviewForm";
import ProductReviews from "./components/reviews/Reviews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => (
  <Router>
    <Menu />
    <div
      style={{
        padding: "2%",
      }}
    >
      <Routes>
        <Route path="/" element={<ProductReviews />} />
        <Route path="/products" element={<Products />} />
        <Route path="/review" element={<ProductReviewForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
