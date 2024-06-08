
// eslint-disable-next-line react/prop-types
const Button = ({text , classnames}) => {
  return (
     <button type="button" className={` px-4 py-2 rounded-sm border-[1px] border-transparent hover:border-slate-900   hover:text-slate-900 hover:bg-transparent bg-black text-slate-100 duration-300 ease-in ${classnames} `}> {text} </button>
  )
}

export default Button