import { Link } from "react-router-dom"
import { popularProducts } from "../data/data"
import Card from "./Card"
import Heading from "./Heading"

const Popular = () => {
  return (
    <section className="w-full mt-10  min-h-screen bg-white ">
       <div className="container lg:max-w-[1080px]  mx-auto ">
          <Heading title={"POPULAR PRODUCTS"} />
          <ul className="w-full flex flex-wrap items-center justify-center gap-4 px-2 py-4 mt-8 ">
            {
              popularProducts.map((item) => (
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

export default Popular