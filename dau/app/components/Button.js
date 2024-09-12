const Button = ({text, bg}) => {
    return(
        <button className={`text-white ${bg} text-2xl font-bold w-72 h-20 rounded-full m-4`}> {text} </button>
    )
}

export default Button;