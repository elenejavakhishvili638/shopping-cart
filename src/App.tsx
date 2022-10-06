import React, {useState} from 'react';
import {useQuery} from "react-query"
import Item from "./Item/Item"
//components
import Drawer from "@material-ui/core/Drawer"
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import Badge from "@material-ui/core/Badge"
//styles
import {Wrapper} from "./App.styles"

import {Product} from "./interfaces/productInterface"

// const getProducts = fetch("https://fakestoreapi.com/products").then(res => res.json().then(data => console.log(data)))

const getProducts = async(): Promise<Product[]> => await(await fetch("https://fakestoreapi.com/products")).json()

const App: React.FC = () => {
  const {data, isLoading, error} = useQuery<Product[]>('products', getProducts)

  const getItems = () => null

  const handleAdd = (clicked: Product)=> null

  const handleRemove = () => null

  if(isLoading) return <LinearProgress />
  if(error) return <p>Something went wrong...</p>


  console.log(data)

  return (
    <Wrapper>
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
