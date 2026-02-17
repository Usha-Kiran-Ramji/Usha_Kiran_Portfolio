import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  SiReact,
  SiSpringboot,
  SiPostgresql,
  SiOpenjdk,
} from "react-icons/si";

import { floatingAnimation } from "../../animations/motionVariants";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: 10,
       background: "linear-gradient(135deg, #ffffff, #f0f4ff)",
color: "#1a1a1a",

      }}
    >
      {/* Floating Icons */}
      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          fontSize: "3rem",
          opacity: 1.5,
        }}
      >
        <SiReact />
      </motion.div>

      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          fontSize: "3rem",
          opacity: 0.3,
        }}
      >
        <SiSpringboot />
      </motion.div>

      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          fontSize: "3rem",
          opacity: 0.3,
        }}
      >
        <SiPostgresql />
      </motion.div>

      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          top: "35%",
          right: "35%",
          fontSize: "3rem",
          opacity: 0.3,
        }}
      >
        <SiOpenjdk />
      </motion.div>

      {/* Main Content */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Container
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "2.2rem",
                  sm: "2.8rem",
                  md: "3.5rem",
                },
              }}
            >
              Hi, I’m <span style={{ color: "#90caf9" }}>Usha Kiran</span>
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                },
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Java Full Stack Developer
              <br />
              Spring Boot • React • PostgreSQL
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 4, px: 4, py: 1.5 }}
            >
              View Projects
            </Button>
          </Container>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
