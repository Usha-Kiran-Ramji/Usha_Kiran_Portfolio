import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa";

/* Floating animation */
const floating = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* Skills Data */
const skillsData = [
  {
    title: "Frontend",
    items: [
      { icon: <SiReact />, label: "React.js" },
      { icon: <SiRedux />, label: "Redux" },
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiHtml5 />, label: "HTML5" },
      { icon: <SiCss3 />, label: "CSS3" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <FaJava />, label: "Java" },
      { icon: <SiSpringboot />, label: "Spring Boot" },
      { icon: <FaCode />, label: "REST APIs" },
    ],
  },
  {
    title: "Database",
    items: [
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <SiMysql />, label: "MySQL" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { icon: <SiGit />, label: "Git" },
      { icon: <SiGithub />, label: "GitHub" },
      { icon: <FaCode />, label: "VS Code" },
      { icon: <SiPostman />, label: "Postman" },
      { icon: <SiSwagger />, label: "Swagger UI" },
    ],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        backgroundColor: "#f7f9fc",
      }}
    >
      <Container>
        {/* Heading */}
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Skills
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
          Technologies I use to build scalable and high-performance applications
        </Typography>

        {/* One category per row */}
        <Grid container spacing={4}>
          {skillsData.map((category, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  {/* Category Title */}
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {category.title}
                  </Typography>

                  {/* Centered Icons Row */}
                  <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {category.items.map((item, i) => (
                      <Grid item xs={6} sm={4} md={2} key={i}>
                        <motion.div
                          variants={floating}
                          animate="animate"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: "2.3rem",
                              color: "#1976d2",
                              mb: 1,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                transform: "scale(1.2)",
                                color: "#0d47a1",
                              },
                            }}
                          >
                            {item.icon}
                          </Box>

                          <Typography variant="body2" color="text.secondary">
                            {item.label}
                          </Typography>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
