// File: src/components/navbar/Navbar.jsx
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [elevate, setElevate] = useState(false);

  useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "skills", "experience", "projects", "contact"];

  const navButtonStyle = {
    color: "#fff",
    fontWeight: 600,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#3b82f6",
      transition: "0.3s",
    },
    "&:hover::after": { width: "100%" },
  };

  return (
    <AppBar
      position="fixed"
      elevation={elevate ? 6 : 0}
      sx={{
        background: elevate
          ? "rgba(15, 23, 42, 0.95)"
          : "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(12px)",
        transition: "0.3s ease",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#fff", cursor: "pointer", letterSpacing: 1 }}
        >
          UshaKiran.Dev
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          {navItems.map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.05 }}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={600}
                offset={-80} // adjust for fixed navbar
              >
                <Button sx={navButtonStyle}>{item.toUpperCase()}</Button>
              </ScrollLink>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
