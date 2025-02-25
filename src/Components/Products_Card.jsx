import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box, Rating, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTOCart, addToFavorites, removeFromFavorites } from "./store";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const truncateText = (text, length) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const Products_Card = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.cart.favorites); // Get favorites from Redux
  
  // Check if the product is already in the cart or favorites
  const isInCart = cart.some((item) => item.id === product.id);
  const isFavorite = favorites?.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addTOCart(product));
    }
  };

  const handleToggleFavorite = () => {
    console.log(isFavorite);
    
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
        position: "relative",
      }}
    >
      {/* Favorite Button */}
      <IconButton
        onClick={handleToggleFavorite}
        sx={{ position: "absolute", top: 10, right: 10, color: isFavorite ? "red" : "gray" }}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", padding: 2 }}
      />

      {/* Product Details */}
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {truncateText(product.title, 25)}
        </Typography>

        {/* Rating */}
        <Box display="flex" alignItems="center">
          <Rating value={product.rating.rate} precision={0.1} readOnly />
          <Typography variant="body2" sx={{ ml: 1, color: "gray" }}>
            ({product.rating.count})
          </Typography>
        </Box>

        {/* Price */}
        <Typography variant="h6" color="primary" sx={{ mt: 1, fontWeight: "bold" }}>
          ${product.price}
        </Typography>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          color={isInCart ? "success" : "secondary"}
          fullWidth
          sx={{ mt: 2, fontWeight: "bold", borderRadius: 2 }}
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Products_Card;
