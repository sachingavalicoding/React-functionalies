import Heading from "./Heading";
import img1 from "/data/images/cate-1.jpg";
import img2 from "/data/images/cate-2.jpg";
import img3 from "/data/images/cate-3.jpg";
const Category = () => {
  return (
    <section className="w-full bg-white min-h-screen  py-8 px-2  ">
      <div className="container lg:w-[1080px] mx-auto ">
        <Heading title={"DISCOVER"} title2={"THE COLLECTIONS"} />
        <div className="w-full mt-14 items-center grid grid-cols-2  gap-2 ">
          <div className="">
            <img className=" rounded-lg  " src={img1} alt="img" />
            
            
          </div>
          <div className="grid grid-rows-2 gap-4 px-6 ">
            <img className=" rounded-lg " src={img2} alt="img" />
          
          
            <img className=" rounded-lg " src={img3} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
