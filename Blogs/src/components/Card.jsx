import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Card = ({ image, title, price, rating, oldPrice }) => {
  return (
    <li className=" shadow-xl  w-[80%] md:w-80 mx-auto px-4  rounded-md py-4 mt-8   ">
      <img className="hover:translate-x-6 duration-300 ease-in hover:scale-105 w-[12rem] mx-auto " src={image} alt="" />
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-semibold"> {title} </h4>
        <div className="flex items-center gap-2 ">
          <p className="text-slate-700 line-through">{oldPrice}</p>
          <p className="text-slate-800 text-xl  ">{price}</p>
        </div>
        <p className="flex items-center gap-2  ">
         
        
         {
          rating <= 4 ? (
            <>
            <FaStar  className="text-yellow-500"/>
            <FaStar  className="text-yellow-500"/>
            <FaStar  className="text-yellow-500"/>
            <CiStar />
            <CiStar />
            
            
            </>
          ) : (  
          <>
           <FaStar  className="text-yellow-500 "/>
           <FaStar  className="text-yellow-500 "/>
           <FaStar  className="text-yellow-500 "/>
           <FaStar  className="text-yellow-500 "/>
           <FaStar  className="text-yellow-500 "/>
            </>)
         }
        </p>
      </div>
    </li>
  );
};

export default Card;
