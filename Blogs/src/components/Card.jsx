// eslint-disable-next-line react/prop-types
const Card = ({ image, title, price, rating, oldPrice, categoary }) => {
  return (
    <li className="w-96 border-2 ">
      <img src={image} alt="" />
      <div>
        <h4> {title} </h4>
        <div className="flex items-center gap-2 ">
          <p>{oldPrice}</p>
          <p>{price}</p>
        </div>
        <p>
          {rating}
          {categoary}
        </p>
      </div>
    </li>
  );
};

export default Card;
