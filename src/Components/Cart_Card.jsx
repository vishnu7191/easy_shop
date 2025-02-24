import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./store";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

const Cart_Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        boxShadow: 3,
        borderRadius: 3,
        width: "80%",
        justifyContent: "space-between",
        transition: "0.3s",
        "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
        mx: "auto",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{
          width: { xs: "100%", sm: 90 },
          height: { xs: 120, sm: 90 },
          objectFit: "contain",
          borderRadius: 2,
        }}
      />

      {/* Product Details */}
      <CardContent
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 2 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            color: "#333",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: 200,
          }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mt: 0.5 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>

      {/* Quantity Controls */}
      <Box
        display="flex"
        alignItems="center"
        sx={{
          bgcolor: "#f0f0f0",
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
          mx: { xs: 0, sm: 2 },
          mt: { xs: 1, sm: 0 },
        }}
      >
        {/* Decrease Quantity or Remove */}
        {product.quantity > 1 ? (
          <IconButton
            onClick={() => dispatch(decreaseQuantity(product.id))}
            color="primary"
            sx={{ p: 0.5 }}
          >
            <Remove fontSize="small" />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => dispatch(removeFromCart(product.id))}
            color="error"
            sx={{ p: 0.5 }}
          >
            <Delete fontSize="small" />
          </IconButton>
        )}

        {/* Quantity */}
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", mx: 1, fontSize: "16px" }}
        >
          {product.quantity}
        </Typography>

        {/* Increase Quantity */}
        <IconButton
          onClick={() => dispatch(increaseQuantity(product.id))}
          color="primary"
          sx={{ p: 0.5 }}
        >
          <Add fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default Cart_Card;
