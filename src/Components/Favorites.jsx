import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import Favorites_Card from "./Favorites_Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.cart.favorites || []);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" sx={{textAlign:'center', fontWeight: "bold", mb: 3 }}>
        My Wishlist
      </Typography>
      {favorites.length === 0 ? (
        <Typography>No favorite items yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Favorites_Card product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Favorites;
