import { Box, Container, Typography, Stack, Link, IconButton } from "@mui/material";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa"; // ✅ Use FontAwesome Twitter
import { MdEmail, MdPhone } from "react-icons/md";

const ContactPage = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        minHeight: "100vh",
        backgroundColor: "#111827",
        color: "#fff",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Contact Me
        </Typography>

        <Typography sx={{ mb: 4, color: "#94a3b8" }}>
          I’d love to hear from you! Connect with me through any of the following:
        </Typography>

        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={2}>
            <MdEmail size={24} />
            <Typography>ushakiran7123@gmail.com</Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <MdPhone size={24} />
            <Typography>+91 9100943038</Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/usha-kiran-98b82b257/"
              target="_blank"
            >
              <SiLinkedin size={28} color="#0a66c2" />
            </IconButton>

            <IconButton
              component={Link}
              href="https://github.com/Usha-Kiran-Ramji"
              target="_blank"
            >
              <SiGithub size={28} color="#fff" />
            </IconButton>

            <IconButton
              component={Link}
              href="https://twitter.com/yourhandle"
              target="_blank"
            >
              <FaTwitter size={28} color="#1da1f2" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactPage;
