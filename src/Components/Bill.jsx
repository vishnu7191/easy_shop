import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Box, Divider, List, ListItem, ListItemText } from "@mui/material";

const Bill = () => {
  const cart = useSelector((state) => state.cart.cart);

  // Calculate total items and total price
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <Card sx={{ maxWidth: 450, p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: "", margin:4}}>
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
          <Typography variant="body1" fontWeight="bold">
            {totalItems}
          </Typography>
        </Box>

        {/* Subtotal */}
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="body1">Subtotal:</Typography>
          <Typography variant="body1" fontWeight="bold">
            ${totalPrice}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Grand Total */}
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="h6">Grand Total:</Typography>
          <Typography variant="h6" fontWeight="bold" color="primary">
            ${totalPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Bill;
