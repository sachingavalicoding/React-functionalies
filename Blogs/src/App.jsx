import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./auth/Signup"
import Signin from "./auth/Signin"
import Shop from "./pages/Shop"
import HomeLayout from "./pages/HomeLayout"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/about" element= {<About />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/shop" element= {<Shop />} />
      <Route path="/*" element= {<NotFound />} />
      <Route path="/signup" element = {<Signup />} /> 
      <Route path="/signin" element = {<Signin />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App