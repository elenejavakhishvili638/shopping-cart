import React from 'react'
import Button from "@material-ui/core/Button"
import { Product } from '../interfaces/productInterface'
import { Wrapper } from '../CartItem/CartItem.styles'
import {CartItemProps} from "../interfaces/propsInterface"

const CartItem: React.FC<CartItemProps> = ({item, addToCart, removeFromCart}) => {
  return (
    <Wrapper>

        <div>
            <h3>{item.title}</h3>
            <div className='information'>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => removeFromCart(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => addToCart(item)}
                >
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
  )
}

export default CartItem