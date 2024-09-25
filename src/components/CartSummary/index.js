import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce(
        (acc, eachItem) => acc + eachItem.quantity * eachItem.price,
        0,
      )
      return (
        <div className="checkout-price">
          <div className="cart-price-card">
            <h2 className="price-title">
              <span className="price-head">Order Total:</span> Rs {totalPrice}/-
            </h2>
            <p className="no-of-items">{cartList.length} items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
