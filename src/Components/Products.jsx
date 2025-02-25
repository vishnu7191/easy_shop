import React, { useEffect, useState } from "react";
import Products_Card from "./Products_Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store";
import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.products);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Extract unique categories from the product list
  const categories = ["All", ...new Set(productsList.map((product) => product.category))];

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productsList
      : productsList.filter((product) => product.category === selectedCategory);

  return (
    <Box sx={{ padding: 3 }}>
      {/* Category Filter Dropdown */}
      <Box sx={{ mb: 3, textAlign: "left" }}>
  <Typography
    variant="h5"
    sx={{ fontWeight: "bold", mb: 1, color: "primary.main" }}
  >
    Filter by Category
  </Typography>

  <Select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    displayEmpty
    sx={{
      width: 300,
      backgroundColor: "white",
      borderRadius: 2,
      border: "1px solid #ccc",
      "&:hover": { borderColor: "primary.main" },
    }}
  >
    {categories.map((category) => (
      <MenuItem key={category} value={category}>
        {category}
      </MenuItem>
    ))}
  </Select>
</Box>


      {/* Product Grid */}
      <Grid container spacing={3} justifyContent="center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Products_Card product={product} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="gray" sx={{ mt: 3, textAlign: "center" }}>
            No products found in this category.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Products;
