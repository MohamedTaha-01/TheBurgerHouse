import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import Order from "./pages/Order";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
