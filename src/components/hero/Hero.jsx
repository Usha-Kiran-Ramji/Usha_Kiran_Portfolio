// File: src/components/hero/Hero.jsx
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProfilePic from "../../assets/profile/Usha_Profile.jpeg"; // Replace with your image

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 20% 20%, #1e293b, #0f172a)",
        color: "#fff",
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
          {/* Profile Picture Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            {/* Floating + Glow */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
              style={{ position: "relative" }}
            >
              {/* Glow Effect */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: 200, md: 300 },
                  height: { xs: 300, md: 300 },
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* Avatar */}
              <Box
                component="img"
                src={ProfilePic}
                alt="Usha Kiran"
                sx={{
                  width: { xs: 180, md: 280 },
                  height: { xs: 220, md: 280 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 0 35px rgba(59, 130, 246, 0.4)",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Text Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: 600, textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                background: "linear-gradient(90deg, #90A5C7A9, #6BE5FB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              Hi, I'm Usha Kiran 👋
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, minHeight: "60px" }}>
              <TypeAnimation
                sequence={[
                  "React JS Developer 💻",
                  2000,
                  "Java Full Stack Developer 🚀",
                  2000,
                  "Building Scalable Web Applications ⚡",
                  2000,
                  "C# Developer 🖥️",
                  2000,
                  "MVVM< WPF< WinForms",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </Typography>

            <Typography sx={{ mb: 4, color: "#cbd5e1" }}>
              Passionate about creating high-performance,
              scalable and user-friendly applications using
              modern technologies.
            </Typography>

            {/* View Projects Button */}
            <ScrollLink
              to="projects"
              smooth={true}
              duration={600}
              offset={-70}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: 3,
                  background: "linear-gradient(90deg,#2563eb,#06b6d4)",
                  fontWeight: "bold",
                  cursor: "pointer",
                  "&:hover": {
                    background: "linear-gradient(90deg,#1e40af,#06b6d4)",
                  },
                }}
              >
                View Projects
              </Button>
            </ScrollLink>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
