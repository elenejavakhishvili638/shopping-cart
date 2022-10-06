import React, {useState} from 'react';
import {useQuery} from "react-query"
import Item from "./Item/Item"
//components
import Drawer from "@material-ui/core/Drawer"
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import Badge from "@material-ui/core/Badge"
import Cart from './Cart/Cart';
//styles
import {Wrapper, StyledButton} from "./App.styles"

import {Product} from "./interfaces/productInterface"

// const getProducts = fetch("https://fakestoreapi.com/products").then(res => res.json().then(data => console.log(data)))

const getProducts = async(): Promise<Product[]> => await(await fetch("https://fakestoreapi.com/products")).json()

const App: React.FC = () => {
  const {data, isLoading, error} = useQuery<Product[]>('products', getProducts)
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<Product[]>([])

  const getItems = (items: Product[]) => 
    items.reduce((accumulator: number, item) => accumulator + item.amount, 0) 
  

  const handleAdd = (clicked: Product) => {
    setCartItems(prevValues => {
      const itemInCart = prevValues.find((item) => item.id === clicked.id)
      if(itemInCart) {
        return prevValues.map((item) => 
          item.id === clicked.id ? {...item, amount: item.amount + 1} : item
        )
      }
      return [...prevValues, {...clicked, amount: 1}]
    })

  }

  const handleRemove = (id: number) => {
    // cartItems.filter((item) => item.id !== id)

    setCartItems((prevValues) => (
      prevValues.reduce((accumaltor, item) => {
        if(item.id === id) {
          if(item.amount === 1) return accumaltor;
          return [...accumaltor, {...item, amount: item.amount - 1}]
        } else {
          return [...accumaltor, item]
        }
      }, [] as Product[]) 
    ))

   
  }

  if(isLoading) return <LinearProgress />
  if(error) return <p>Something went wrong...</p>


  console.log(data)

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems}
          addToCart={handleAdd}
          removeFromCart={handleRemove}
        />
      </Drawer>
    <StyledButton onClick={() => setCartOpen(true)}>
      <Badge badgeContent={getItems(cartItems)} color="error">
        <AddShoppingCartIcon/>
      </Badge>
    </StyledButton>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item 
                handleAdd={handleAdd}
                item={item}
              />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    //           <div className="App">
    // </div>
  );
}

export default App;
