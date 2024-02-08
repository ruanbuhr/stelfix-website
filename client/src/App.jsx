import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Repair from "./pages/Repair";
import Pricing from "./pages/Pricing";
import BuySell from "./pages/BuySell";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TC from "./pages/TC";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="routes">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/buysell" element={<BuySell />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandconditions" element={<TC />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}
