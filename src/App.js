import "./Styles/App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar";
import Company from "./pages/company";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Quote from "./pages/quote";
import BService from "./pages/BService";
import SGService from "./pages/SGService";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="headerBox">
        <Header className="headerComponet" />
      </div>
      <div className="navBox">
        <Nav />
      </div>
      <div className="pages">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/Blanchard" element={<BService />} />
          <Route path="/Surface" element={<SGService />} />
        </Routes>
      </div>
      <div className="footerBox">
        <Footer />
      </div>
    </div>
  );
}

export default App;
