import React, { useEffect } from "react";
import Products_Card from "./Products_Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store";
import { Box, Grid } from "@mui/material";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.products);
  console.log(productsList)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        {productsList.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Products_Card product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
