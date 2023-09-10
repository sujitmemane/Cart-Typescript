import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./App.css";
import Cart from "./pages/Cart";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="max-w-[1366px] mx-auto  min-h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
