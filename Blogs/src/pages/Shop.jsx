import Button from "../components/Button";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { popularProducts } from "../data/data";
import Card from "../components/Card";

const Shop = () => {
  return (
    <>
      <section className="shop__container pt-32 w-full lg:w-[1080px] mx-auto min-h-screen  ">
        <div className="container mx-auto flex flex-col gap-6 ">
          <div>
            <Link className="flex items-center gap-4 text-xl ml-8 ">
              {" "}
              <FaArrowCircleLeft /> Home{" "}
            </Link>
          </div>
          <div className="flex w-full items-center gap-4 ">
          <div className="w-96 bg-slate-200 ">
             
          </div>
          <div className="w-full flex px-4 flex-col  items-center justify-between ">
          <div className="flex items-center w-full justify-between">
          <p> Shop All </p>
            <div className="flex gap-4 items-center">
              <Button text={"Latest"}>  </Button>
              <Button text={"Sort"}>  </Button>
            </div>
          </div>
            <ul className="w-full grid grid-cols-2 justify-center gap-4 ">
            {
              popularProducts.map((item) => (
                <li key={item.id}> 
                 <Link to={`/${item.category}`}>  <Card image={item.image} title={item.title} price={item.price} oldPrice={item.oldPrice} categoary={item.category} rating={item.rating} /> </Link>
                 </li>
              ))
            }   
            </ul>
          </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
