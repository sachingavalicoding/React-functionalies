import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element= {<About />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/products" element= {<Products />} />
      <Route path="/*" element= {<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App