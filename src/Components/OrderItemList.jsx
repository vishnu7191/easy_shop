import React from "react";
import { Collapse, List, ListItem, ListItemText, Typography } from "@mui/material";

const OrderItemList = ({ items, expanded }) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <List sx={{ mt: 1, bgcolor: "#f9f9f9", borderRadius: 2, p: 1 }}>
        {items.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={`${item.title} (x${item.quantity})`} />
            <Typography fontWeight="bold">${item.price.toFixed(2)}</Typography>
          </ListItem>
        ))}
      </List>
    </Collapse>
  );
};

export default OrderItemList;
