import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './product/Product';
import useStyles from './styles';

const products = [
    {
      id: 1,
      name: "Shoes",
      description: "Running shoes",
      price: "$5",
      image:
        "https://images.unsplash.com/photo-1578116922645-3976907a7671?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      id: 2,
      name: "Macbook",
      description: "Apple macbook",
      price: "$1500",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ];

const Products = ({products,onAddToCart}) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
