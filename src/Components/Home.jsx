import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Blur Effect */}
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          background: "rgba(255, 255, 255, 0.2)",
          filter: "blur(80px)",
          borderRadius: "50%",
          top: "20%",
          left: "10%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          background: "rgba(255, 255, 255, 0.15)",
          filter: "blur(100px)",
          borderRadius: "50%",
          bottom: "15%",
          right: "10%",
        }}
      />

      {/* Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" fontWeight="bold">
          Welcome to <span style={{ color: "#ffeb3b" }}>ShopEasy</span> 🛒
        </Typography>
      </motion.div>

      {/* Subtitle with Delay Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
          Your One-Stop Destination for Quality Products!
        </Typography>
      </motion.div>

      {/* Call to Action Button with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#ffeb3b",
            color: "black",
            "&:hover": { backgroundColor: "#fdd835" },
          }}
          startIcon={<ShoppingCartIcon />}
          onClick={() => navigate("/products")}
        >
          Shop Now
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home;
