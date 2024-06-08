
// eslint-disable-next-line react/prop-types
const Heading = ({title , title2 }) => {
  return (
    <div className="w-full py-4 px-2  ">
      <div className="container flex flex-col pl-4  text-4xl  font-medium lg:w-[1080px] mx-auto border-[1rem] border-transparent border-l-red-600">
         <h2> {title } </h2>
         <h2> {title2 } </h2>
      </div>
    </div>
  )
}

export default Heading