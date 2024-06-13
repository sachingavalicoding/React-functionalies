import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Card from "../components/Card";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import { FaFilter } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
const Shop = () => {
  const { products, setFilters, currentPage, setCurrentPage, totalPages } =
    useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [color, setColor] = useState("");
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [filterOpen , setFilterOpen] = useState(false);
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setFilters((prev) => ({ ...prev, category: event.target.value }));
  };

  const handlePriceChange = (event) => {
    const value = event.target.value.split("-").map(Number);
    setPriceRange(value);
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    setFilters((prev) => ({ ...prev, color: event.target.value }));
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
    setFilters((prev) => ({ ...prev, rating: Number(event.target.value) }));
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setFilters((prev) => ({
      ...prev,
      search: event.target.value.toLowerCase(),
    }));
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setFilters((prev) => ({ ...prev, sortBy: event.target.value }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="shop__container pt-32 w-full lg:w-[1150px] mx-auto min-h-screen">
        <div className="container mx-auto flex flex-col gap-6">
          <div>
            <Link to="/" className="flex items-center gap-4 text-xl ml-8">
              <FaArrowCircleLeft /> Home
            </Link>
          </div>
          <div className="flex  w-full gap-2">
           {
            filterOpen ?  <div className="w-[20rem]  h-fit px-2 py-2 z-20 bg-white fixed top-16 left-0  flex flex-col gap-4 shadow-2xl rounded-md">
            <h3 className="text-2xl pt-3 font-semibold text-center">
              FILTERS
            </h3>
           
             <div className="w-full relative ">
             <MdCancel onClick={()=> setFilterOpen((prev) => !prev)} className="flex absolute top-0 right-10 text-xl "/>
             </div>
           
            <div className="flex gap-4 flex-col px-2 py-4 ">
              <h4>SORT</h4>
              <div className="flex flex-col gap-4 ">
                <label>
                  <input
                    type="radio"
                    name="sort"
                    value="low-to-high"
                    onChange={handleSortChange}
                    checked={sortBy === "low-to-high"}
                  />{" "}
                  low to High
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="sort"
                    value="high-to-low"
                    onChange={handleSortChange}
                    checked={sortBy === "high-to-low"}
                  />{" "}
                  Price High to Low
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-4">
              <h4>CATEGORIES</h4>
              <div>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value=""
                    onChange={handleCategoryChange}
                    checked={category === ""}
                  />{" "}
                  All
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="men"
                    onChange={handleCategoryChange}
                    checked={category === "men"}
                  />{" "}
                  Men
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="women"
                    onChange={handleCategoryChange}
                    checked={category === "women"}
                  />{" "}
                  Women
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="shoe"
                    onChange={handleCategoryChange}
                    checked={category === "shoe"}
                  />{" "}
                  Shoes
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-4">
              <h4>FILTER BY PRICE</h4>
              <div>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="0-Infinity"
                    onChange={handlePriceChange}
                    checked={priceRange[1] === Infinity}
                  />{" "}
                  All
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="0-50"
                    onChange={handlePriceChange}
                    checked={priceRange[1] === 50}
                  />{" "}
                  0$ - 50$
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="51-100"
                    onChange={handlePriceChange}
                    checked={priceRange[1] === 100}
                  />{" "}
                  51$ - 100$
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="101-150"
                    onChange={handlePriceChange}
                    checked={priceRange[1] === 150}
                  />{" "}
                  101$ - 150$
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="151-Infinity"
                    onChange={handlePriceChange}
                    checked={priceRange[0] === 151}
                  />{" "}
                  151$ - Max
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-4">
              <h4>FILTER BY COLOR</h4>
              <div>
                <label>
                  <input
                    type="radio"
                    name="color"
                    value=""
                    onChange={handleColorChange}
                    checked={color === ""}
                  />{" "}
                  All
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="color"
                    value="red"
                    onChange={handleColorChange}
                    checked={color === "red"}
                  />{" "}
                  Red
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="color"
                    value="blue"
                    onChange={handleColorChange}
                    checked={color === "blue"}
                  />{" "}
                  Blue
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="color"
                    value="white"
                    onChange={handleColorChange}
                    checked={color === "white"}
                  />{" "}
                  White
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="color"
                    value="black"
                    onChange={handleColorChange}
                    checked={color === "black"}
                  />{" "}
                  Black
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="color"
                    value="others"
                    onChange={handleColorChange}
                    checked={color === "others"}
                  />{" "}
                  Others
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-4">
              <h4>FILTER BY RATING</h4>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value="0"
                    onChange={handleRatingChange}
                    checked={rating === 0}
                  />{" "}
                  All
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value="1"
                    onChange={handleRatingChange}
                    checked={rating === 1}
                  />{" "}
                  1 Star & Up
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={handleRatingChange}
                    checked={rating === 2}
                  />{" "}
                  2 Stars & Up
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={handleRatingChange}
                    checked={rating === 3}
                  />{" "}
                  3 Stars & Up
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={handleRatingChange}
                    checked={rating === 4}
                  />{" "}
                  4 Stars & Up
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={handleRatingChange}
                    checked={rating === 5}
                  />{" "}
                  5 Stars
                </label>
              </div>
            </div>
          </div> : " "
           }
            <div className="w-full flex px-4 flex-col items-center ">
              <div className="flex items-center flex-wrap w-full justify-center md:justify-between">
                <div className="w-96 relative top-0 left-0">
                  <input
                    className="px-4 py-2 rounded-lg w-96 bg-slate-100 text-pink-500"
                    type="search"
                    placeholder="What you want.....?"
                    value={search}
                    onChange={handleSearchChange}
                  />
                  <FcSearch className="text-xl absolute top-3 right-3" />
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-10 h-10 rounded-full ${
                        currentPage === index + 1
                          ? "bg-pink-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <div className="ml-8 text-xl flex items-center justify-center">
                    <FaFilter onClick={()=> setFilterOpen((prev) => !prev)  }  className="text-pink-700"/>
                  </div>
                </div>
              </div>
              <ul className="w-full grid grid-cols-1  md:grid-cols-2 place-content-center gap-2">
                {products.map((item) => (
                  <li key={item.id}>
                    <Link to={`/${item.category}`}>
                      <Card
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        categoary={item.category}
                        rating={item.rating}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
