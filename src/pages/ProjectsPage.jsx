import { Box, Container, Typography, Paper, Grid, Button } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Full-stack app built with React and Spring Boot.",
  },
  {
    id: 2,
    title: "Resume Tracker System",
    description: "Track job applications and manage resume versions.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio built using React and MUI.",
  },
];

const ProjectsPage = () => {
  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: "#ffffff" }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Projects
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
          Some of the projects I have worked on
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                <Button variant="contained">View Project</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
