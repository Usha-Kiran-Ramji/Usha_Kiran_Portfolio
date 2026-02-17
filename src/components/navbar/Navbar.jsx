import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(15, 32, 39, 0.7)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          UshaKiran.Dev
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Scroll links */}
          {["home", "skills"].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.1 }}>
              <ScrollLink to={item} smooth duration={500} offset={-80}>
                <Button sx={{ color: "#fff" }}>
                  {item.toUpperCase()}
                </Button>
              </ScrollLink>
            </motion.div>
          ))}

          {/* Route links */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              component={RouterLink}
              to="/projects"
              sx={{ color: "#fff" }}
            >
              PROJECTS
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              component={RouterLink}
              to="/contact"
              sx={{ color: "#fff" }}
            >
              CONTACT
            </Button>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
