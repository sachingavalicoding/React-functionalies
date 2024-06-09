import Category from "../components/Category"
import Popular from "../components/Popular"
import Testimonial from "../components/Testimonial"
import Home from "./Home"


const HomeLayout = () => {
  return (
    <>
    <Home />
    <Category />
    <Popular />
    <Testimonial />
    </>
  )
}

export default HomeLayout