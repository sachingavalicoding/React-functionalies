import { mostRatedProducts } from "../data/data"
import { Link } from "react-router-dom"
import Heading from "./Heading"
import Card from "./Card"
const MostRated = () => {
  return (
    <section className="w-full mt-10  min-h-screen bg-white ">
    <div className="container lg:max-w-[1080px]  mx-auto ">
       <Heading title={"MOST RATED "} />
       <ul className="w-full flex flex-wrap  items-center justify-center gap-4 px-4 py-4 mt-8 ">
         {
           mostRatedProducts.map((item) => (
             <li key={item.id}> 
              <Link to={`/${item.category}`}>  <Card image={item.image} title={item.title} price={item.price} oldPrice={item.oldPrice} categoary={item.category} rating={item.rating} /> </Link>
              </li>
           ))
         }      
       </ul>
    </div>
 </section>
  )
}

export default MostRated