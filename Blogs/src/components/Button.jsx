

// eslint-disable-next-line react/prop-types
const Button = ({text, classnames}) => {
  return (
    <button className={` px-3 py-2 text-black bg-slate-100 rounded-md ${classnames} `}> {text} </button>
  )
}

export default Button