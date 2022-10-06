import React from 'react'
import Button from "@material-ui/core/Button"
import {Product} from "../interfaces/productInterface"
import {Wrapper} from "./Item.styles"
import {Props} from "../interfaces/propsInterface"

const Item: React.FC<Props> = ({item, handleAdd}) => (
  <Wrapper>
    <img alt={item.title} src={item.image} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <button onClick={() => handleAdd(item)}>Add to cart</button>
  </Wrapper>
)

export default Item
