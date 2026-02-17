// File: src/components/work/WorkExperience.jsx
import { Box, Container, Typography, Paper, Avatar, Link } from "@mui/material";
import { motion } from "framer-motion";
import IndoMimLogo from "../../assets/logos/IndoMIM.avif";
import HCLLogo from "../../assets/logos/hcl.png";
import PurpleplumLogo from "../../assets/logos/PurpleplumLogo.png";

const experiences = [
  {
    id: 1,
    title: "GET - C# Developer",
    company: "INDO-MIM Limited",
    website: "https://www.indo-mim.com/",
    logo: IndoMimLogo,
    duration: "January 2026",
    description:
    "Working as a Graduate Engineer Trainee focusing on C# full-stack development. Designed and implemented desktop applications using WPF, WinForms, and MVVM architecture. Integrated SQL databases for backend operations, including data storage, retrieval, and reporting. Built responsive UI components and implemented features like CRUD operations, authentication, and data validation.",
  },
  {
    id: 2,
    title: "Java Full Stack Trainee",
    company: "HCL Technologies",
    website: "https://www.hcltech.com/",
    logo: HCLLogo,
    duration: "June 2025 - September 2025",
    description:
      "Developed full-stack web applications using Java, Spring Boot, and MySQL. Implemented server-side business logic, RESTful APIs, and CRUD operations. Created responsive frontend components and optimized application performance.",
  },
  {
    id: 3,
    title: "ReactJS Developer Intern",
    company: "Purpleplum Digital Solutions",
    website: "https://purpleplumfi.com/",
    logo: PurpleplumLogo,
    duration: "February 2025 - May 2025",
    description:
      "Built responsive web applications using ReactJS and integrated with backend services and REST APIs. Developed reusable components, implemented state management, and optimized UI/UX performance.",
  },
];

const WorkExperience = () => {
  return (
    <Box id="experience" sx={{ py: 10, backgroundColor: "#f3f4f6" }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Internships & Work Experience
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
          Here are some of the professional experiences and internships I’ve completed
        </Typography>

        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              left: { xs: "20px", md: "50%" },
              top: 0,
              bottom: 0,
              width: "4px",
              backgroundColor: "#3b82f6",
              borderRadius: "2px",
              transform: { md: "translateX(-50%)" },
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#60a5fa", // lighter glow on hover
              },
            },
          }}
        >
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: isLeft ? "flex-start" : "flex-end",
                    mb: 8,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: "45%" },
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        ml: isLeft ? 0 : { md: 4 },
                        mr: !isLeft ? 0 : { md: 4 },
                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
                        <Avatar src={exp.logo} alt={exp.company} sx={{ width: 56, height: 56 }} />
                        <Typography variant="h6" fontWeight="bold">
                          {exp.title}
                        </Typography>
                      </Box>
                      <Typography sx={{ mb: 1 }}>
                        <Link
                          href={exp.website}
                          target="_blank"
                          rel="noopener"
                          underline="hover"
                          color="primary"
                        >
                          {exp.company}
                        </Link>{" "}
                        | {exp.duration}
                      </Typography>
                      <Typography color="text.secondary">{exp.description}</Typography>
                    </Paper>
                  </Box>

                  {/* Dot connecting to line */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: "32px", md: "50%" },
                      top: "20px",
                      width: 16,
                      height: 16,
                      bgcolor: "#3b82f6",
                      borderRadius: "50%",
                      transform: { md: "translateX(-50%)" },
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#60a5fa",
                        boxShadow: "0 0 10px #60a5fa",
                      },
                    }}
                  />
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default WorkExperience;
