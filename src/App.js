import "./Styles/App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Navbar";

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
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
}

export default App;
