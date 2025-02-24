import React from "react";
import { useSelector } from "react-redux";
import Cart_Card from "./Cart_Card";
import { Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  console.log(cartData);
  
  return (
    <Box sx={{ p: 4, minHeight: "80vh", textAlign: "center" }}>
      {cartData.length > 0 ? (
        <>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            🛒 Your Shopping Cart
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))"
            gap={6}
            justifyContent="center"
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
              px: 4,
              py: 1.5,
              fontSize: "18px",
              borderRadius: 2,
              fontWeight: "bold",
            }}
            onClick={() => navigate("/bill")}
          >
            Proceed to Checkout 💳
          </Button>
        </>
      ) : (
        <Box sx={{ mt: 8 }}>
          <ShoppingCartIcon sx={{ fontSize: 80, color: "gray" }} />
          <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
            Your cart is empty!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3, px: 4, py: 1.2, borderRadius: 2 }}
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
