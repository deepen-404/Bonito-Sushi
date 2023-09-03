import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Menu from "./pages/menu/menu";
import Login from "./pages/login/login";
import Navbar from "./components/Navbar";
import { ShopContextProvider } from "./context/Shop-context";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="menu" element={<Menu />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
