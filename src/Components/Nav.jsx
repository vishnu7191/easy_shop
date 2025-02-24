import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Cart", path: "/cart" },
  { label: "Bill", path: "/bill" },
  { label: "OrderHistory", path: "/orderhistory" }
];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer for Mobile View
  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            borderBottom: "1px solid #ccc", // Subtle bottom border
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow
          }}
        >
          {/* Left: Hamburger Menu for Mobile */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Center: App Title */}
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              textAlign: { xs: "center", md: "left" },
              textDecoration: "none",
              color: "inherit",
            }}
            component={Link}
            to="/"
          >
            ShopEasy
          </Typography>

          {/* Right: Navigation Links for Larger Screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Typography
                key={item.label}
                component={Link}
                to={item.path}
                variant="h6"
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer for Mobile */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      {/* Add padding to prevent content from getting hidden behind navbar */}
      <Box sx={{ mt: 8 }} />
    </>
  );
};

export default Nav;
