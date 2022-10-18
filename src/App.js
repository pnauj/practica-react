import "./App.css";
import Navb from "./components/layout/Navb";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import ProductosCreate from "./components/ProductosCreate/ProductosCreate";
import Login from "./components/layout/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navb />
        <main>
          <Routes>
            <Route exacth path="/login" element={<Login />} />
            <Route exacth path="/" element={<Home />} />
            <Route
              exacth
              path="/producto/create"
              element={<ProductosCreate />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
