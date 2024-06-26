import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./auth/Signup"
import Signin from "./auth/Signin"

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
      <Route path="/signup" element = {<Signup />} /> 
      <Route path="/signin" element = {<Signin />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App