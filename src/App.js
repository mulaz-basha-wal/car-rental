import "./App.css";
import P404 from "./Components/P404";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Employees from "./Components/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<P404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
