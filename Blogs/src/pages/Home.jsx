import Button from "../components/Button";

const Home = () => {
  return (
    <main className="w-full ">
      {/* Background Image Section */}
      <section
        className="relative w-full md:h-[140rem] h-[50rem] bg-contain md:bg-cover  bg-no-repeat bg-top"
        style={{ backgroundImage: `url('/data/images/girl-img.png')` }}
      >
        {/* Sticky Text Content */}
        <div className="sticky top-0 flex flex-col items-center justify-center text-center text-white h-screen">
          <p className="text-xs md:text-sm uppercase tracking-wider">#New Summer Collection 2019</p>
          <h1 className="text-4xl text-black md:text-4xl lg:text-6xl font-bold my-4">Arrivals Sales</h1>
          <Button text="Shop Now" link = "/shop" />
        </div>
      </section>
    </main>
  );
};

export default Home;
