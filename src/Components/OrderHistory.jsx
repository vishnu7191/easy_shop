import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromHistory } from "./store";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import OrderCard from "./OrderCard";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderHistory.orderHistory);
  const navigate = useNavigate();
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 800, margin: "auto", mt: 4, p: 2 }}>
      {orders.length > 0 ? (
        <>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
            📜 Order Timeline
          </Typography>

          <Box sx={{ position: "relative", pl: 2 }}>
            {orders.map((order, index) => (
              <OrderCard
                key={order.id}
                order={order}
                expanded={expandedOrder === order.id}
                toggleExpand={toggleExpand}
                removeOrder={() => dispatch(removeFromHistory(order.id))}
                isFirst={index === 0}
                isLast={index === orders.length - 1}
              />
            ))}
          </Box>
        </>
      ) : (
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <ShoppingCartOutlined sx={{ fontSize: 80, color: "gray" }} />
          <Typography variant="h6" color="gray" mt={2}>
            Your order history is empty!
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            Looks like you haven't placed any orders yet.
          </Typography>
          <Paper
            variant="contained"
            sx={{ mt: 2, textTransform: "none", fontWeight: "bold", borderRadius: "20px", p: 2, cursor: "pointer", background: "#1976d2", color: "white", textAlign: "center" }}
            onClick={() => navigate("/products")}
          >
            Start Shopping
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default OrderHistory;
