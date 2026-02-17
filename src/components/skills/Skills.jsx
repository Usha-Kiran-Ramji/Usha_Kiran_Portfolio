import { Box, Container, Typography, Paper, Grid } from "@mui/material"; // ✅ Grid included
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
import { FaJava } from "react-icons/fa";

const skills = [
  { id: 1, icon: <SiReact />, label: "React.js" },
  { id: 2, icon: <SiRedux />, label: "Redux" },
  { id: 3, icon: <SiJavascript />, label: "JavaScript" },
  { id: 4, icon: <SiHtml5 />, label: "HTML5" },
  { id: 5, icon: <SiCss3 />, label: "CSS3" },
  { id: 6, icon: <SiBootstrap />, label: "Bootstrap" },
  { id: 7, icon: <FaJava />, label: "Java" },
  { id: 8, icon: <SiSpringboot />, label: "Spring Boot" },
  { id: 9, icon: <SiPostgresql />, label: "PostgreSQL" },
  { id: 10, icon: <SiMysql />, label: "MySQL" },
  { id: 11, icon: <SiGit />, label: "Git" },
  { id: 12, icon: <SiGithub />, label: "GitHub" },
  { id: 13, icon: <SiPostman />, label: "Postman" },
  { id: 14, icon: <SiSwagger />, label: "Swagger" },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: "#f3f4f6" }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Skills
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
          Technologies I use to build modern applications
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill) => (
            <Grid item key={skill.id} xs={6} sm={4} md={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  height: 140,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Box sx={{ fontSize: "2.5rem", color: "#2563eb", mb: 1 }}>
                  {skill.icon}
                </Box>
                <Typography>{skill.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
