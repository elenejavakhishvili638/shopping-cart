import React from 'react'
import CartItem from '../CartItem/CartItem'
import { Wrapper } from '../Cart/Cart.styles'
import { Product } from '../interfaces/productInterface'
import {CartProps} from "../interfaces/propsInterface"

const Cart: React.FC<CartProps> = ({cartItems, addToCart, removeFromCart}) => {

    const calculateTotal = (items: Product[]) => {
        items.reduce((accumlator: number, item) => accumlator + item.amount * item.price, 0)
    }

  return (
    <Wrapper>
        <h2>Cart</h2>
        {cartItems.length === 0 ? <p>No items in the cart.</p> : null}
        {cartItems.map((item) => (
            <CartItem 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        ))}
        {/* <h2>Total: ${(calculateTotal(cartItems))}</h2> */}
    </Wrapper>
  )
}

export default Cart