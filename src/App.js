import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BottomNav from "./components/BottomNav";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <Router>
      <FloatingWhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
      </Routes>
      <BottomNav/>
    </Router>
  );
}

export default App;