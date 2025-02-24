import React from "react";
import { useSelector } from "react-redux";
import Cart_Card from "./Cart_Card";
import { Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        minHeight: "80vh",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {cartData.length > 0 ? (
        <>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
              color: "#333",
            }}
          >
            🛒 Your Shopping Cart
          </Typography>

          {/* Responsive Grid for Cart Items */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(500px, 1fr))"
            gap={3}
            justifyContent="center"
            alignItems="start"
          >
            {cartData.map((item) => (
              <Cart_Card key={item.id} product={item} />
            ))}
          </Box>

          {/* Proceed to Checkout Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 4,
              px: { xs: 3, md: 4 },
              py: 1.5,
              fontSize: { xs: "16px", md: "18px" },
              borderRadius: "25px",
              fontWeight: "bold",
              transition: "0.3s",
              "&:hover": { backgroundColor: "#1976d2" },
            }}
            onClick={() => navigate("/bill")}
          >
            Proceed to Checkout 💳
          </Button>
        </>
      ) : (
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <ShoppingCartIcon sx={{ fontSize: 100, color: "gray" }} />
          <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
            Your cart is empty!
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
            Looks like you haven't added anything to your cart yet.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 3,
              px: { xs: 3, md: 4 },
              py: 1.5,
              borderRadius: "25px",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: "bold",
            }}
            onClick={() => navigate("/products")}
          >
            🛍️ Start Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
