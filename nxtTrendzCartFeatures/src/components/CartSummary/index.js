import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalOrders = cartList.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-value">
            <span className="order-total-label">Order Total: </span>
            Rs {totalOrders}/-
          </h1>
          <p className="total-items">{cartList.length} Items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
