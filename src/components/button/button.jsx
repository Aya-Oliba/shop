import "./button.css"
const Button = (props)=> {
    return (
        <button className="btn" onClick={props.functionName}>
            {props.text}
        </button>
    )
}
export default Button