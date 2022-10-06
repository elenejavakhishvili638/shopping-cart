import { Product } from "../interfaces/productInterface"

export interface Props {
    item: Product,
    handleAdd: (clicked: Product) => null
}