import React from "react";
import { Box, Paper, Typography, Chip, Button, Divider } from "@mui/material";
import { ExpandMore, ExpandLess, DeleteForeverOutlined } from "@mui/icons-material";
import OrderItemList from "./OrderItemList";

const OrderCard = ({ order, expanded, toggleExpand, removeOrder, isFirst, isLast }) => {
  return (
    <Box sx={{ mb: 3, display: "flex", alignItems: "flex-start", position: "relative" }}>
      {/* Timeline Line */}
      <Box
        sx={{
          width: 4,
          height: "100%",
          backgroundColor: "#1976d2",
          position: "absolute",
          left: 18,
          top: isFirst ? "12px" : 0,
          bottom: isLast ? "50%" : 0,
        }}
      />

      {/* Order Card */}
      <Paper elevation={4} sx={{ p: 2, borderRadius: 3, flexGrow: 1, boxShadow: 3, position: "relative", ml: 5 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight="bold">Order #{order.id}</Typography>
          <Chip
            label={order.status}
            color={
              order.status === "Delivered"
                ? "success"
                : order.status === "Shipped"
                ? "primary"
                : "warning"
            }
          />
        </Box>

        {/* Order Details */}
        <Typography variant="body2" color="textSecondary" mt={1}>
          📅 {order.date}
        </Typography>
        <Typography variant="h6" fontWeight="bold" mt={1}>
          💰 ${Number(order.totalPrice).toFixed(2)}
        </Typography>

        {/* Expand Button */}
        <Button
          variant="text"
          size="small"
          onClick={() => toggleExpand(order.id)}
          sx={{
            mt: 1,
            fontWeight: "bold",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          {expanded ? "Hide Details" : "View Details"}
          {expanded ? <ExpandLess sx={{ ml: 1 }} /> : <ExpandMore sx={{ ml: 1 }} />}
        </Button>

        {/* Order Items (Dropdown) */}
        <OrderItemList items={order.items} expanded={expanded} />

        <Divider sx={{ my: 2 }} />

        {/* Cancel Order Button */}
        <Button
          variant="contained"
          color="error"
          size="small"
          startIcon={<DeleteForeverOutlined />}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#d32f2f" },
          }}
          onClick={removeOrder}
        >
          Cancel Order
        </Button>
      </Paper>
    </Box>
  );
};

export default OrderCard;
