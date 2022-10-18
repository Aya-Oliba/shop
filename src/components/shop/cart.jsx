import {BsFillCartFill} from 'react-icons/bs'
import './shop.css'
function Cart (props){
    return (
        <div className="cart p-5 d-flex justify-content-end">
            <BsFillCartFill className='cart-icon'></BsFillCartFill>
            <span>{props.counter}</span>
        </div>
    )
}
export default Cart;