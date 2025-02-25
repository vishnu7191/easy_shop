import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Box } from "@mui/material";
import Favorites_Card from "./Favorites_Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Favorites = () => {
  const favorites = useSelector((state) => state.cart.favorites || []);

  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        My Wishlist
      </Typography>

      {favorites.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
          }}
        >
          {/* Alternative No Favorites Illustration */}
          <img
            src="https://ouch-cdn2.icons8.com/-qpU9-NqW7SLQmJlaZ6cfJx29EvXw8od5P3-H6O04tI/rs:fit:256:228/czM6Ly9pY29uczguY29tL3ZlY3RvcnMvbGluZS1hcnQtcGVvcGxlLXdpdGgtZW1wdHktbGlzdC8yMDgtbWVyY2hhbnQtZnJlZS1wbGFjZS5wbmc.png"
            alt="No Favorites"
            width={250}
            style={{ marginBottom: 20 }}
          />

          <Typography variant="h6" color="gray" sx={{ mb: 2 }}>
            You haven't added any favorites yet!
          </Typography>

          <Typography variant="body1" color="textSecondary">
            Browse our products and tap the{" "}
            <FavoriteBorderIcon sx={{ verticalAlign: "middle", color: "red" }} />  
            to add your favorites here.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3} >
          {favorites.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Favorites_Card product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Favorites;
