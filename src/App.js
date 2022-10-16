import "./App.css";
import Navb from "./components/layout/Navb";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navb />
        <main>
          <Routes>
            <Route exacth path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
