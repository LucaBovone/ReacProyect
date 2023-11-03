import imagen1 from "./3050238.png"
import './CartWidget.css'
const CartWidget = () => {

    return (

        <div className="cart-container">
            <img src={imagen1} alt="Carrito" className="cart-icon" />
            <span className="cart-count"> 5</span>
        </div>
    )
};

export default CartWidget;