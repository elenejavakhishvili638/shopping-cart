import { Product } from "../interfaces/productInterface"

export interface Props {
    item: Product,
    handleAdd: (clicked: Product) => void
}

export interface CartProps {
    cartItems: Product[]
    addToCart: (clicked: Product) => void
    removeFromCart: (id: number) => void
}

export interface CartItemProps {
    item: Product
    addToCart: (clicked: Product) => void
    removeFromCart: (id: number) => void
}