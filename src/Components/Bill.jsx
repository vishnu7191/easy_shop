import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography, Box, Divider, List, ListItem, ListItemText, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { toast } from "react-toastify";
import { addToHistory, reset } from "./store";

const Bill = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  
  // Calculate total items and total price
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const generateOrderId = () => `ORD${Date.now()}`;

  // Handle order placement
  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("Order placed successfully! 🎉", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });

    const newOrder = {
      id: generateOrderId(),
      date: new Date().toISOString().split("T")[0],
      items: cart,
      totalPrice: totalPrice,
      status: "Shipped",
    };

    dispatch(addToHistory(newOrder));
    dispatch(reset());
  };

  return (
    <>
      {cart.length > 0 ? (
        <Card sx={{ maxWidth: 450, p: 2, boxShadow: 3, borderRadius: 2, margin: "auto", mt: 10 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* List of Items */}
            <List>
              {cart.map((item) => (
                <ListItem key={item.id} sx={{ py: 0.5 }}>
                  <ListItemText 
                    primary={`${item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}`} 
                    secondary={`Quantity: ${item.quantity}`} 
                  />
                  <Typography variant="body2" fontWeight="bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 1 }} />

            {/* Total Items */}
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="body1">Total Items:</Typography>
              <Typography variant="body1" fontWeight="bold">{totalItems}</Typography>
            </Box>

            {/* Subtotal */}
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="body1">Subtotal:</Typography>
              <Typography variant="body1" fontWeight="bold">${totalPrice}</Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            {/* Grand Total */}
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography variant="h6">Grand Total:</Typography>
              <Typography variant="h6" fontWeight="bold" color="primary">${totalPrice}</Typography>
            </Box>

            {/* Place Order Button */}
            <Box mt={3} textAlign="center">
              <Button variant="contained" color="primary" fullWidth onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : (
        // Show empty cart message
        <Box sx={{ textAlign: "center", mt: 5, p: 3 }}>
          <ShoppingCartIcon sx={{ fontSize: 80, color: "gray" }} />
          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "gray" }}>
            Your cart is empty!
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
            Looks like you haven't added anything yet. Browse our products and start shopping!
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Bill;
